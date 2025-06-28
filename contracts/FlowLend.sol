// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FlowLend
 * @dev A decentralized lending platform smart contract
 */
contract FlowLend is ReentrancyGuard, Ownable {

    struct LoanRequest {
        uint256 id;
        address borrower;
        uint256 amount;
        uint256 interestRate; // Annual percentage rate (APR) in basis points (e.g., 500 = 5%)
        uint256 duration; // Loan duration in seconds
        uint256 collateralAmount;
        bool isActive;
        bool isFunded;
        bool isRepaid;
        uint256 createdAt;
        uint256 fundedAt;
        address lender;
    }

    struct UserProfile {
        uint256 totalBorrowed;
        uint256 totalLent;
        uint256 activeLoanCount;
        uint256 creditScore; // Simple credit score out of 1000
        bool isVerified;
    }

    mapping(uint256 => LoanRequest) public loanRequests;
    mapping(address => UserProfile) public userProfiles;
    mapping(address => uint256[]) public userLoanIds;
    mapping(address => uint256) public userCollateral;

    uint256 public nextLoanId = 1;
    uint256 public platformFeeRate = 100; // 1% in basis points
    uint256 public constant MIN_LOAN_AMOUNT = 0.01 ether;
    uint256 public constant MAX_LOAN_AMOUNT = 100 ether;
    uint256 public constant MIN_INTEREST_RATE = 100; // 1%
    uint256 public constant MAX_INTEREST_RATE = 2000; // 20%
    uint256 public constant MIN_DURATION = 7 days;
    uint256 public constant MAX_DURATION = 365 days;

    event LoanRequested(
        uint256 indexed loanId,
        address indexed borrower,
        uint256 amount,
        uint256 interestRate,
        uint256 duration,
        uint256 collateralAmount
    );

    event LoanFunded(
        uint256 indexed loanId,
        address indexed lender,
        address indexed borrower,
        uint256 amount
    );

    event LoanRepaid(
        uint256 indexed loanId,
        address indexed borrower,
        uint256 principalAmount,
        uint256 interestAmount
    );

    event CollateralDeposited(address indexed user, uint256 amount);
    event CollateralWithdrawn(address indexed user, uint256 amount);

    modifier validLoanAmount(uint256 amount) {
        require(amount >= MIN_LOAN_AMOUNT && amount <= MAX_LOAN_AMOUNT, "Invalid loan amount");
        _;
    }

    modifier validInterestRate(uint256 rate) {
        require(rate >= MIN_INTEREST_RATE && rate <= MAX_INTEREST_RATE, "Invalid interest rate");
        _;
    }

    modifier validDuration(uint256 duration) {
        require(duration >= MIN_DURATION && duration <= MAX_DURATION, "Invalid duration");
        _;
    }

    modifier loanExists(uint256 loanId) {
        require(loanId > 0 && loanId < nextLoanId, "Loan does not exist");
        _;
    }

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Deposit collateral to secure future loans
     */
    function depositCollateral() external payable {
        require(msg.value > 0, "Must deposit some ETH");
        userCollateral[msg.sender] = userCollateral[msg.sender] + msg.value;
        emit CollateralDeposited(msg.sender, msg.value);
    }

    /**
     * @dev Withdraw available collateral
     */
    function withdrawCollateral(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(userCollateral[msg.sender] >= amount, "Insufficient collateral");
        
        // Check if user has active loans that require this collateral
        uint256[] memory userLoans = userLoanIds[msg.sender];
        uint256 requiredCollateral = 0;
        
        for (uint i = 0; i < userLoans.length; i++) {
            LoanRequest memory loan = loanRequests[userLoans[i]];
            if (loan.isActive && loan.isFunded && !loan.isRepaid) {
                requiredCollateral = requiredCollateral + loan.collateralAmount);
            }
        }
        
        require(userCollateral[msg.sender] - amount) >= requiredCollateral, "Cannot withdraw collateral for active loans");
        
        userCollateral[msg.sender] = userCollateral[msg.sender] - amount);
        payable(msg.sender).transfer(amount);
        
        emit CollateralWithdrawn(msg.sender, amount);
    }

    /**
     * @dev Request a loan
     */
    function requestLoan(
        uint256 amount,
        uint256 interestRate,
        uint256 duration,
        uint256 collateralAmount
    ) 
        external 
        validLoanAmount(amount)
        validInterestRate(interestRate)
        validDuration(duration)
        returns (uint256)
    {
        require(collateralAmount > 0, "Collateral required");
        require(userCollateral[msg.sender] >= collateralAmount, "Insufficient collateral");
        require(collateralAmount >= amount * 120) / 100), "Collateral must be at least 120% of loan amount");

        uint256 loanId = nextLoanId++;
        
        loanRequests[loanId] = LoanRequest({
            id: loanId,
            borrower: msg.sender,
            amount: amount,
            interestRate: interestRate,
            duration: duration,
            collateralAmount: collateralAmount,
            isActive: true,
            isFunded: false,
            isRepaid: false,
            createdAt: block.timestamp,
            fundedAt: 0,
            lender: address(0)
        });

        userLoanIds[msg.sender].push(loanId);
        userProfiles[msg.sender].activeLoanCount++;

        emit LoanRequested(loanId, msg.sender, amount, interestRate, duration, collateralAmount);
        
        return loanId;
    }

    /**
     * @dev Fund a loan request
     */
    function fundLoan(uint256 loanId) external payable loanExists(loanId) nonReentrant {
        LoanRequest storage loan = loanRequests[loanId];
        
        require(loan.isActive, "Loan is not active");
        require(!loan.isFunded, "Loan already funded");
        require(msg.value == loan.amount, "Must send exact loan amount");
        require(msg.sender != loan.borrower, "Cannot fund your own loan");

        loan.isFunded = true;
        loan.fundedAt = block.timestamp;
        loan.lender = msg.sender;

        // Update user profiles
        userProfiles[msg.sender].totalLent = userProfiles[msg.sender].totalLent + loan.amount);
        userProfiles[loan.borrower].totalBorrowed = userProfiles[loan.borrower].totalBorrowed + loan.amount);

        // Transfer loan amount to borrower (minus platform fee)
        uint256 platformFee = loan.amount * platformFeeRate) / 10000);
        uint256 borrowerAmount = loan.amount - platformFee);
        
        payable(loan.borrower).transfer(borrowerAmount);
        payable(owner()).transfer(platformFee);

        emit LoanFunded(loanId, msg.sender, loan.borrower, loan.amount);
    }

    /**
     * @dev Repay a loan
     */
    function repayLoan(uint256 loanId) external payable loanExists(loanId) nonReentrant {
        LoanRequest storage loan = loanRequests[loanId];
        
        require(loan.isFunded, "Loan not funded");
        require(!loan.isRepaid, "Loan already repaid");
        require(msg.sender == loan.borrower, "Only borrower can repay");

        uint256 interestAmount = calculateInterest(loanId);
        uint256 totalRepayment = loan.amount + interestAmount);
        
        require(msg.value >= totalRepayment, "Insufficient repayment amount");

        loan.isRepaid = true;
        loan.isActive = false;
        userProfiles[loan.borrower].activeLoanCount--;

        // Transfer repayment to lender
        payable(loan.lender).transfer(totalRepayment);

        // Return excess payment if any
        if (msg.value > totalRepayment) {
            payable(msg.sender).transfer(msg.value - totalRepayment));
        }

        // Update credit score
        _updateCreditScore(loan.borrower, true);

        emit LoanRepaid(loanId, loan.borrower, loan.amount, interestAmount);
    }

    /**
     * @dev Calculate interest for a loan
     */
    function calculateInterest(uint256 loanId) public view loanExists(loanId) returns (uint256) {
        LoanRequest memory loan = loanRequests[loanId];
        
        if (!loan.isFunded) {
            return 0;
        }

        uint256 timeElapsed = block.timestamp - loan.fundedAt);
        uint256 annualInterest = loan.amount * loan.interestRate) / 10000);
        uint256 interest = annualInterest * timeElapsed) / 365 days);
        
        return interest;
    }

    /**
     * @dev Get loan details
     */
    function getLoan(uint256 loanId) external view loanExists(loanId) returns (LoanRequest memory) {
        return loanRequests[loanId];
    }

    /**
     * @dev Get user's loan IDs
     */
    function getUserLoans(address user) external view returns (uint256[] memory) {
        return userLoanIds[user];
    }

    /**
     * @dev Check if loan is overdue
     */
    function isLoanOverdue(uint256 loanId) external view loanExists(loanId) returns (bool) {
        LoanRequest memory loan = loanRequests[loanId];
        
        if (!loan.isFunded || loan.isRepaid) {
            return false;
        }

        return block.timestamp > loan.fundedAt + loan.duration);
    }

    /**
     * @dev Liquidate overdue loan (can be called by anyone)
     */
    function liquidateLoan(uint256 loanId) external loanExists(loanId) nonReentrant {
        LoanRequest storage loan = loanRequests[loanId];
        
        require(loan.isFunded, "Loan not funded");
        require(!loan.isRepaid, "Loan already repaid");
        require(block.timestamp > loan.fundedAt + loan.duration), "Loan not overdue");

        loan.isActive = false;
        userProfiles[loan.borrower].activeLoanCount--;

        // Transfer collateral to lender
        userCollateral[loan.borrower] = userCollateral[loan.borrower] - loan.collateralAmount);
        payable(loan.lender).transfer(loan.collateralAmount);

        // Update credit score negatively
        _updateCreditScore(loan.borrower, false);
    }

    /**
     * @dev Update user's credit score
     */
    function _updateCreditScore(address user, bool positiveAction) internal {
        UserProfile storage profile = userProfiles[user];
        
        if (positiveAction) {
            // Increase credit score for on-time repayment
            if (profile.creditScore < 1000) {
                profile.creditScore = profile.creditScore + 10);
                if (profile.creditScore > 1000) {
                    profile.creditScore = 1000;
                }
            }
        } else {
            // Decrease credit score for default
            if (profile.creditScore > 50) {
                profile.creditScore = profile.creditScore - 50);
            } else {
                profile.creditScore = 0;
            }
        }
    }

    /**
     * @dev Set platform fee rate (only owner)
     */
    function setPlatformFeeRate(uint256 newRate) external onlyOwner {
        require(newRate <= 1000, "Fee rate cannot exceed 10%");
        platformFeeRate = newRate;
    }

    /**
     * @dev Get all active loan requests for browsing
     */
    function getActiveLoanRequests() external view returns (uint256[] memory) {
        uint256[] memory activeLoans = new uint256[](nextLoanId - 1);
        uint256 count = 0;
        
        for (uint256 i = 1; i < nextLoanId; i++) {
            if (loanRequests[i].isActive && !loanRequests[i].isFunded) {
                activeLoans[count] = i;
                count++;
            }
        }
        
        // Resize array to actual count
        uint256[] memory result = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = activeLoans[i];
        }
        
        return result;
    }
}

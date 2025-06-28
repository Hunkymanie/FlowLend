const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FlowLend", function () {
  let FlowLend;
  let flowLend;
  let owner;
  let borrower;
  let lender;

  beforeEach(async function () {
    [owner, borrower, lender] = await ethers.getSigners();
    
    FlowLend = await ethers.getContractFactory("FlowLend");
    flowLend = await FlowLend.deploy();
    await flowLend.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await flowLend.owner()).to.equal(owner.address);
    });

    it("Should have correct initial values", async function () {
      expect(await flowLend.nextLoanId()).to.equal(1);
      expect(await flowLend.platformFeeRate()).to.equal(100); // 1%
    });
  });

  describe("Collateral Management", function () {
    it("Should allow depositing collateral", async function () {
      const depositAmount = ethers.parseEther("1.0");
      
      await expect(
        flowLend.connect(borrower).depositCollateral({ value: depositAmount })
      ).to.emit(flowLend, "CollateralDeposited")
       .withArgs(borrower.address, depositAmount);
      
      expect(await flowLend.userCollateral(borrower.address)).to.equal(depositAmount);
    });

    it("Should allow withdrawing available collateral", async function () {
      const depositAmount = ethers.parseEther("2.0");
      const withdrawAmount = ethers.parseEther("1.0");
      
      // Deposit collateral
      await flowLend.connect(borrower).depositCollateral({ value: depositAmount });
      
      // Withdraw some collateral
      await expect(
        flowLend.connect(borrower).withdrawCollateral(withdrawAmount)
      ).to.emit(flowLend, "CollateralWithdrawn")
       .withArgs(borrower.address, withdrawAmount);
      
      expect(await flowLend.userCollateral(borrower.address)).to.equal(
        depositAmount - withdrawAmount
      );
    });
  });

  describe("Loan Requests", function () {
    beforeEach(async function () {
      // Deposit collateral for borrower
      await flowLend.connect(borrower).depositCollateral({ 
        value: ethers.parseEther("3.0") 
      });
    });

    it("Should allow creating a loan request", async function () {
      const loanAmount = ethers.parseEther("2.0");
      const interestRate = 500; // 5%
      const duration = 30 * 24 * 60 * 60; // 30 days
      const collateralAmount = ethers.parseEther("2.4"); // 120% of loan

      await expect(
        flowLend.connect(borrower).requestLoan(
          loanAmount,
          interestRate,
          duration,
          collateralAmount
        )
      ).to.emit(flowLend, "LoanRequested")
       .withArgs(1, borrower.address, loanAmount, interestRate, duration, collateralAmount);

      const loan = await flowLend.getLoan(1);
      expect(loan.borrower).to.equal(borrower.address);
      expect(loan.amount).to.equal(loanAmount);
      expect(loan.isActive).to.be.true;
      expect(loan.isFunded).to.be.false;
    });

    it("Should reject loan with insufficient collateral ratio", async function () {
      const loanAmount = ethers.parseEther("2.0");
      const interestRate = 500;
      const duration = 30 * 24 * 60 * 60;
      const insufficientCollateral = ethers.parseEther("2.0"); // Only 100%

      await expect(
        flowLend.connect(borrower).requestLoan(
          loanAmount,
          interestRate,
          duration,
          insufficientCollateral
        )
      ).to.be.revertedWith("Collateral must be at least 120% of loan amount");
    });
  });

  describe("Loan Funding", function () {
    let loanId;
    const loanAmount = ethers.parseEther("2.0");

    beforeEach(async function () {
      // Setup: borrower deposits collateral and requests loan
      await flowLend.connect(borrower).depositCollateral({ 
        value: ethers.parseEther("3.0") 
      });
      
      await flowLend.connect(borrower).requestLoan(
        loanAmount,
        500, // 5%
        30 * 24 * 60 * 60, // 30 days
        ethers.parseEther("2.4") // 120% collateral
      );
      
      loanId = 1;
    });

    it("Should allow funding a loan", async function () {
      await expect(
        flowLend.connect(lender).fundLoan(loanId, { value: loanAmount })
      ).to.emit(flowLend, "LoanFunded")
       .withArgs(loanId, lender.address, borrower.address, loanAmount);

      const loan = await flowLend.getLoan(loanId);
      expect(loan.isFunded).to.be.true;
      expect(loan.lender).to.equal(lender.address);
    });

    it("Should reject funding with incorrect amount", async function () {
      const wrongAmount = ethers.parseEther("1.0");
      
      await expect(
        flowLend.connect(lender).fundLoan(loanId, { value: wrongAmount })
      ).to.be.revertedWith("Must send exact loan amount");
    });

    it("Should prevent borrower from funding their own loan", async function () {
      await expect(
        flowLend.connect(borrower).fundLoan(loanId, { value: loanAmount })
      ).to.be.revertedWith("Cannot fund your own loan");
    });
  });
});

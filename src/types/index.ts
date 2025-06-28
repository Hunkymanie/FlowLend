export interface LoanRequest {
  id: number
  borrower: string
  amount: string
  interestRate: string
  duration: string
  collateralAmount: string
  isActive: boolean
  isFunded: boolean
  isRepaid: boolean
  createdAt: string
  fundedAt?: string
  lender?: string
}

export interface UserProfile {
  totalBorrowed: string
  totalLent: string
  activeLoanCount: number
  creditScore: number
  isVerified: boolean
}

export interface ContractAddresses {
  FlowLend: string
}

export interface ChainConfig {
  chainId: number
  name: string
  contracts: ContractAddresses
}

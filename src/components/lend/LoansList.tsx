'use client'

import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'

interface LoanRequest {
  id: number
  borrower: string
  amount: string
  interestRate: string
  duration: string
  collateralAmount: string
  collateralType: string
  maxInterestRate: string
  createdAt: string
  status: 'active' | 'funded' | 'repaid'
  ltv: number
  estimatedReturn: string
}

export function LoansList() {
  const { isConnected, address } = useAccount()
  const [loans, setLoans] = useState<LoanRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'high-yield' | 'low-risk'>('all')
  const [fundingLoan, setFundingLoan] = useState<number | null>(null)

  // Enhanced mock data
  useEffect(() => {
    const mockLoans: LoanRequest[] = [
      {
        id: 1,
        borrower: '0x1234...5678',
        amount: '2.5',
        interestRate: '8.5',
        maxInterestRate: '12.0',
        duration: '30',
        collateralAmount: '4.2',
        collateralType: 'ETH',
        createdAt: '2025-06-28T10:00:00Z',
        status: 'active',
        ltv: 59.5,
        estimatedReturn: '0.053'
      },
      {
        id: 2,
        borrower: '0x8765...4321',
        amount: '1.0',
        interestRate: '15.2',
        maxInterestRate: '18.0',
        duration: '14',
        collateralAmount: '1.8',
        collateralType: 'ETH',
        createdAt: '2025-06-28T09:30:00Z',
        status: 'active',
        ltv: 55.6,
        estimatedReturn: '0.041'
      },
      {
        id: 3,
        borrower: '0xABCD...EFGH',
        amount: '5.0',
        interestRate: '6.8',
        maxInterestRate: '10.0',
        duration: '90',
        collateralAmount: '9.5',
        collateralType: 'ETH',
        createdAt: '2025-06-28T08:15:00Z',
        status: 'active',
        ltv: 52.6,
        estimatedReturn: '0.167'
      },
      {
        id: 4,
        borrower: '0x2468...1357',
        amount: '0.8',
        interestRate: '22.4',
        maxInterestRate: '25.0',
        duration: '7',
        collateralAmount: '1.4',
        collateralType: 'ETH',
        createdAt: '2025-06-28T07:45:00Z',
        status: 'active',
        ltv: 57.1,
        estimatedReturn: '0.034'
      }
    ]
    
    setTimeout(() => {
      setLoans(mockLoans)
      setLoading(false)
    }, 1000)
  }, [])

  const handleFundLoan = (loanId: number) => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }
    
    setFundingLoan(loanId)
    
    // TODO: Implement contract interaction
    console.log('Funding loan:', loanId)
    
    // Simulate funding transaction
    setTimeout(() => {
      setLoans(prev => prev.map(loan => 
        loan.id === loanId 
          ? { ...loan, status: 'funded' as const }
          : loan
      ))
      setFundingLoan(null)
      alert('Loan funded successfully!')
    }, 2000)
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const filteredLoans = loans.filter(loan => {
    if (filter === 'high-yield') return parseFloat(loan.interestRate) > 15
    if (filter === 'low-risk') return loan.ltv < 60
    return true
  }).filter(loan => loan.status === 'active')

  if (loading) {
    return (
      <div className="card">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading loan requests...</p>
        </div>
      </div>
    )
  }

  if (!isConnected) {
    return (
      <div className="card text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
        <p className="text-gray-600 mb-6">
          Connect your wallet to view and fund loan requests
        </p>
        <div className="text-sm text-gray-500">
          Start earning interest by lending to borrowers
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Available Loan Requests
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredLoans.length} active loans • Total value: {filteredLoans.reduce((sum, loan) => sum + parseFloat(loan.amount), 0).toFixed(2)} ETH
          </p>
        </div>
        
        <div className="flex space-x-3">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="input-field w-auto"
          >
            <option value="all">All Loans</option>
            <option value="high-yield">High Yield (15%+)</option>
            <option value="low-risk">Low Risk (LTV &lt; 60%)</option>
          </select>
        </div>
      </div>

      {/* Loan requests grid */}
      <div className="grid gap-6">
        {filteredLoans.map((loan) => (
          <div key={loan.id} className="card hover:shadow-lg transition-shadow border border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Loan details */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 lg:mb-0">
                <div>
                  <label className="text-sm font-medium text-gray-500">Borrower</label>
                  <p className="text-lg font-mono font-medium">{formatAddress(loan.borrower)}</p>
                  <p className="text-xs text-gray-500">Verified</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Amount</label>
                  <p className="text-lg font-semibold">{loan.amount} ETH</p>
                  <p className="text-xs text-gray-500">${(parseFloat(loan.amount) * 2000).toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Interest Rate</label>
                  <p className="text-lg font-semibold text-green-600">{loan.interestRate}% APR</p>
                  <p className="text-xs text-gray-500">Max: {loan.maxInterestRate}%</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Duration</label>
                  <p className="text-lg font-medium">{loan.duration} days</p>
                  <p className="text-xs text-gray-500">
                    Est. return: {loan.estimatedReturn} ETH
                  </p>
                </div>
              </div>
              
              {/* Action section */}
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                {/* Collateral info */}
                <div className="text-right lg:text-left">
                  <div className="text-sm text-gray-500">Collateral</div>
                  <div className="font-semibold">{loan.collateralAmount} {loan.collateralType}</div>
                  <div className="text-xs text-gray-500">
                    LTV: {loan.ltv}%
                  </div>
                </div>
                
                {/* Risk assessment */}
                <div className="text-right lg:text-left">
                  <div className="text-sm text-gray-500">Risk Level</div>
                  <div className={`text-sm font-medium ${
                    loan.ltv < 50 ? 'text-green-600' : 
                    loan.ltv < 65 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {loan.ltv < 50 ? 'Low' : loan.ltv < 65 ? 'Medium' : 'High'}
                  </div>
                  <div className="text-xs text-gray-500">
                    Posted {formatDate(loan.createdAt)}
                  </div>
                </div>
                
                {/* Fund button */}
                <div className="text-right">
                  <button
                    onClick={() => handleFundLoan(loan.id)}
                    disabled={fundingLoan === loan.id}
                    className="btn-primary w-full lg:w-auto px-6 py-2 disabled:opacity-50"
                  >
                    {fundingLoan === loan.id ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Funding...
                      </span>
                    ) : (
                      'Fund Loan'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredLoans.length === 0 && (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No loan requests available
          </h3>
          <p className="text-gray-600">
            {filter === 'all' 
              ? 'Check back later for new lending opportunities'
              : 'Try adjusting your filters to see more loans'
            }
          </p>
        </div>
      )}

      {/* Investment Summary */}
      {filteredLoans.length > 0 && (
        <div className="mt-12 card bg-primary-50 border-primary-200">
          <h3 className="text-lg font-semibold text-primary-800 mb-4">💡 Lending Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
            <div>
              <h4 className="font-medium mb-2">Risk Management:</h4>
              <ul className="space-y-1">
                <li>• Diversify across multiple loans</li>
                <li>• Consider LTV ratios carefully</li>
                <li>• Higher interest = higher risk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">How It Works:</h4>
              <ul className="space-y-1">
                <li>• Fund loans with one click</li>
                <li>• Earn interest automatically</li>
                <li>• Collateral protects your investment</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

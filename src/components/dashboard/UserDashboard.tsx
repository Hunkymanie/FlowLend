'use client'

import { useState, useEffect } from 'react'
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { formatEther } from 'viem'
import { useRouter } from 'next/navigation'
import { WalletConnection } from '../ui/WalletConnection'

export function UserDashboard() {
  const { isConnected, address } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'overview' | 'borrowed' | 'lent' | 'analytics' | 'collateral'>('overview')
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d' | '1y'>('30d')
  const [isLoading, setIsLoading] = useState(false)

  // Functions for handling button actions
  const handleRequestLoan = () => {
    router.push('/borrow')
  }

  const handleFundLoan = () => {
    router.push('/lend')
  }

  const handleAddCollateral = () => {
    setActiveTab('collateral')
  }

  const handleDepositCollateral = async () => {
    // Mock deposit functionality with loading state
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Collateral deposited successfully! This would integrate with smart contracts in production.')
    } catch (error) {
      alert('Error depositing collateral. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleWithdrawCollateral = async () => {
    // Mock withdraw functionality with loading state
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Collateral withdrawn successfully! This would integrate with smart contracts in production.')
    } catch (error) {
      alert('Error withdrawing collateral. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleUseMax = (type: 'deposit' | 'withdraw') => {
    // Mock use max functionality
    alert(`Use max ${type} functionality would set the maximum available amount`)
  }

  const handleRepayLoan = (loanId: number) => {
    // Navigate to payment page with loan ID
    router.push(`/payment?loanId=${loanId}`)
  }

  const handleExtendLoan = (loanId: number) => {
    // Mock extend loan functionality
    alert(`Extend loan #${loanId} functionality would be implemented here`)
  }

  const handleWithdrawEarnings = (loanId: number) => {
    // Mock withdraw earnings functionality
    alert(`Withdraw earnings from loan #${loanId} functionality would be implemented here`)
  }

  // Additional handlers for enhanced interactivity
  const handleMonitorLoan = (loanId: number) => {
    alert(`Opening loan monitoring dashboard for loan #${loanId}`)
  }

  const handleContactBorrower = (loanId: number) => {
    alert(`Opening communication interface for loan #${loanId}`)
  }

  const handleViewDetails = (loanId: number, type: 'borrowed' | 'lent') => {
    alert(`Viewing detailed information for ${type} loan #${loanId}`)
  }

  const handleViewReceipt = (loanId: number) => {
    alert(`Displaying receipt for completed loan #${loanId}`)
  }

  // Function to get filtered data based on timeframe
  const getFilteredData = () => {
    // Create different activity sets for each timeframe to demonstrate filtering
    const allActivities = [
      // 24h activities
      { type: 'lend', amount: '1.5 ETH', action: 'Funded loan request', time: '2 hours ago', status: 'success', timeframe: '24h' },
      { type: 'repay', amount: '0.08 ETH', action: 'Loan payment received', time: '6 hours ago', status: 'success', timeframe: '24h' },
      { type: 'collateral', amount: '0.5 ETH', action: 'Collateral added', time: '12 hours ago', status: 'success', timeframe: '24h' },
      
      // 7d activities (includes 24h)
      { type: 'borrow', amount: '1.2 ETH', action: 'New loan approved', time: '2 days ago', status: 'success', timeframe: '7d' },
      { type: 'lend', amount: '2.0 ETH', action: 'Funded loan request', time: '3 days ago', status: 'success', timeframe: '7d' },
      { type: 'repay', amount: '0.15 ETH', action: 'Interest payment received', time: '5 days ago', status: 'success', timeframe: '7d' },
      
      // 30d activities (includes 7d and 24h)
      { type: 'collateral', amount: '3.0 ETH', action: 'Large collateral deposit', time: '2 weeks ago', status: 'success', timeframe: '30d' },
      { type: 'warning', amount: '', action: 'Health factor below 1.5', time: '3 weeks ago', status: 'warning', timeframe: '30d' },
      { type: 'lend', amount: '5.0 ETH', action: 'Major loan funding', time: '4 weeks ago', status: 'success', timeframe: '30d' },
      
      // 1y activities (includes all)
      { type: 'borrow', amount: '10.0 ETH', action: 'First loan approved', time: '3 months ago', status: 'success', timeframe: '1y' },
      { type: 'collateral', amount: '15.0 ETH', action: 'Initial collateral deposit', time: '6 months ago', status: 'success', timeframe: '1y' },
    ]

    // Filter activities based on selected timeframe
    let filteredActivities = []
    if (timeframe === '24h') {
      filteredActivities = allActivities.filter(activity => activity.timeframe === '24h')
    } else if (timeframe === '7d') {
      filteredActivities = allActivities.filter(activity => ['24h', '7d'].includes(activity.timeframe))
    } else if (timeframe === '30d') {
      filteredActivities = allActivities.filter(activity => ['24h', '7d', '30d'].includes(activity.timeframe))
    } else { // 1y
      filteredActivities = allActivities
    }

    const baseData = {
      portfolioValue: {
        total: balance ? formatEther(balance.value) : '12.8',
        change24h: timeframe === '24h' ? '+2.3%' : timeframe === '7d' ? '+5.1%' : timeframe === '30d' ? '+12.7%' : '+45.2%',
        changeValue: timeframe === '24h' ? '+0.29 ETH' : timeframe === '7d' ? '+0.61 ETH' : timeframe === '30d' ? '+1.45 ETH' : '+4.12 ETH'
      },
      recentActivity: filteredActivities.slice(0, 5) // Show max 5 activities
    }
    return baseData
  }

  if (!isConnected) {
    return (
      <div className="card text-center py-12 sm:py-20">
        <div className="max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Connect Your Wallet</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Connect your wallet to access your personalized dashboard and manage your loans, 
            track earnings, and monitor your DeFi portfolio.
          </p>
          <WalletConnection className="w-full sm:w-auto btn-primary px-6 sm:px-8 py-3">
            Connect Wallet
          </WalletConnection>
          
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-base sm:text-lg flex justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C10.89,7 10,7.89 10,9V11C9.45,11 9,11.45 9,12V16C9,16.55 9.45,17 10,17H14C14.55,17 15,16.55 15,16V12C15,11.45 14.55,11 14,11V9C14,7.89 13.11,7 12,7M12,8C12.56,8 13,8.44 13,9V11H11V9C11,8.44 11.44,8 12,8Z"/>
                  </svg>
                </div>
                <div>Secure</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-base sm:text-lg flex justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7,2V13H10V22L17,10H13L17,2H7Z"/>
                  </svg>
                </div>
                <div>Fast</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-base sm:text-lg flex justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,4.07C6.81,4.56 3.56,7.81 3.07,12H11M13,4.07V12H20.93C20.44,7.81 17.19,4.56 13,4.07M20.93,14H13V21.93C17.19,21.44 20.44,18.19 20.93,14M11,21.93V14H3.07C3.56,18.19 6.81,21.44 11,21.93Z"/>
                  </svg>
                </div>
                <div>Decentralized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Get filtered data based on current timeframe
  const filteredData = getFilteredData()

  // Mock comprehensive data for professional DeFi dashboard
  const mockData = {
    portfolioValue: {
      total: balance ? formatEther(balance.value) : '12.8',
      change24h: '+2.3%',
      changeValue: '+0.29 ETH'
    },
    borrowed: [
      {
        id: 1,
        amount: '2.5 ETH',
        amountUSD: '$4,250',
        interestRate: '6.5%',
        status: 'Active',
        dueDate: '2025-07-28',
        totalOwed: '2.65 ETH',
        totalOwedUSD: '$4,505',
        collateral: '3.5 ETH WETH',
        healthFactor: 1.32,
        liquidationPrice: '$1,214',
        nextPayment: '0.08 ETH',
        nextPaymentDate: '2025-02-28'
      },
      {
        id: 2,
        amount: '1.2 ETH',
        amountUSD: '$2,040',
        interestRate: '7.2%',
        status: 'Active',
        dueDate: '2025-09-15',
        totalOwed: '1.24 ETH',
        totalOwedUSD: '$2,108',
        collateral: '1.8 ETH WETH',
        healthFactor: 1.45,
        liquidationPrice: '$1,133',
        nextPayment: '0.05 ETH',
        nextPaymentDate: '2025-03-15'
      }
    ],
    lent: [
      {
        id: 1,
        amount: '1.5 ETH',
        amountUSD: '$2,550',
        interestRate: '8.0%',
        status: 'Active',
        borrower: '0x1234...5678',
        expectedReturn: '1.62 ETH',
        expectedReturnUSD: '$2,754',
        durationLeft: '125 days',
        earned: '0.12 ETH',
        earnedUSD: '$204',
        riskLevel: 'Low'
      },
      {
        id: 2,
        amount: '0.8 ETH',
        amountUSD: '$1,360',
        interestRate: '9.5%',
        status: 'Active',
        borrower: '0x5678...9abc',
        expectedReturn: '0.876 ETH',
        expectedReturnUSD: '$1,489',
        durationLeft: '89 days',
        earned: '0.076 ETH',
        earnedUSD: '$129',
        riskLevel: 'Medium'
      },
      {
        id: 3,
        amount: '2.0 ETH',
        amountUSD: '$3,400',
        interestRate: '7.5%',
        status: 'Completed',
        borrower: '0x9abc...def0',
        expectedReturn: '2.15 ETH',
        expectedReturnUSD: '$3,655',
        durationLeft: 'Completed',
        earned: '0.15 ETH',
        earnedUSD: '$255',
        riskLevel: 'Low'
      }
    ],
    collateral: {
      totalDeposited: balance ? formatEther(balance.value) : '5.3',
      totalDepositedUSD: '$9,010',
      lockedInLoans: '3.7',
      lockedInLoansUSD: '$6,290',
      available: '1.6',
      availableUSD: '$2,720',
      utilizationRate: '69.8%',
      assets: [
        { symbol: 'ETH', amount: '4.2', value: '$7,140', percentage: '79.3%' },
        { symbol: 'WETH', amount: '1.1', value: '$1,870', percentage: '20.7%' }
      ]
    },
    analytics: {
      totalEarnings: '0.34 ETH',
      totalEarningsUSD: '$578',
      avgLendingAPY: '8.2%',
      avgBorrowingAPY: '6.8%',
      totalVolume: '12.5 ETH',
      totalVolumeUSD: '$21,250',
      creditScore: 785,
      creditHistory: 'Excellent',
      riskLevel: 'Conservative',
      monthlyData: [
        { month: 'Oct', earnings: 0.08, borrowed: 1.2, lent: 2.1 },
        { month: 'Nov', earnings: 0.12, borrowed: 2.5, lent: 3.2 },
        { month: 'Dec', earnings: 0.09, borrowed: 3.7, lent: 4.3 },
        { month: 'Jan', earnings: 0.05, borrowed: 3.7, lent: 4.3 }
      ]
    },
    recentActivity: filteredData.recentActivity
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Portfolio Overview */}
      <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-4 sm:mb-6">
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Portfolio Overview</h2>
            <p className="text-gray-600 font-mono text-xs sm:text-sm truncate">
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <div className="text-center sm:text-right">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                ${(parseFloat(filteredData.portfolioValue.total) * 1700).toLocaleString()}
              </div>
              <div className="flex items-center justify-center sm:justify-end text-sm text-green-600 mt-1">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {filteredData.portfolioValue.change24h} ({filteredData.portfolioValue.changeValue})
              </div>
            </div>
            {!isConnected ? (
              <button
                onClick={() => connect({ connector: connectors[0] })}
                className="w-full sm:w-auto btn-primary"
              >
                Connect Wallet
              </button>
            ) : (
              <button
                onClick={() => disconnect()}
                className="w-full sm:w-auto btn-secondary"
              >
                Disconnect
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="card bg-emerald-50 border-emerald-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1 truncate">
                {mockData.portfolioValue.total} ETH
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">Total Portfolio</div>
              <div className="text-xs sm:text-sm text-emerald-600">${(parseFloat(mockData.portfolioValue.total) * 1700).toLocaleString()}</div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card bg-green-50 border-green-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1 truncate">
                {mockData.analytics.totalEarnings} ETH
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">Total Earnings</div>
              <div className="text-xs sm:text-sm text-green-600">{mockData.analytics.totalEarningsUSD}</div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card bg-teal-50 border-teal-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-teal-600 mb-1">
                {mockData.analytics.creditScore}
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">Credit Score</div>
              <div className="text-xs sm:text-sm text-teal-600">{mockData.analytics.creditHistory}</div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card bg-orange-50 border-orange-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">
                {mockData.collateral.utilizationRate}
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">Utilization</div>
              <div className="text-xs sm:text-sm text-orange-600">Collateral Ratio</div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="border-b border-gray-200 overflow-hidden">
        <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide pb-px">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-1 sm:space-x-2 ${
              activeTab === 'overview'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('borrowed')}
            className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-1 sm:space-x-2 ${
              activeTab === 'borrowed'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <span className="hidden sm:inline">Borrowed ({mockData.borrowed.length})</span>
            <span className="sm:hidden">Borrowed</span>
          </button>
          <button
            onClick={() => setActiveTab('lent')}
            className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-1 sm:space-x-2 ${
              activeTab === 'lent'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="hidden sm:inline">Lent ({mockData.lent.filter(l => l.status === 'Active').length})</span>
            <span className="sm:hidden">Lent</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-1 sm:space-x-2 ${
              activeTab === 'analytics'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab('collateral')}
            className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-1 sm:space-x-2 ${
              activeTab === 'collateral'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Collateral</span>
          </button>
        </nav>
      </div>

      {/* Enhanced Tab Content */}
      <div className="mt-6 sm:mt-8">
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                    <select 
                      value={timeframe} 
                      onChange={(e) => setTimeframe(e.target.value as any)}
                      className="text-sm border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-auto"
                    >
                      <option value="24h">Last 24h</option>
                      <option value="7d">Last 7 days</option>
                      <option value="30d">Last 30 days</option>
                      <option value="1y">Last year</option>
                    </select>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {mockData.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === 'lend' ? 'bg-green-100 text-green-600' :
                          activity.type === 'borrow' ? 'bg-emerald-100 text-emerald-600' :
                          activity.type === 'repay' ? 'bg-teal-100 text-teal-600' :
                          activity.type === 'collateral' ? 'bg-orange-100 text-orange-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {activity.type === 'lend' && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          )}
                          {activity.type === 'borrow' && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          )}
                          {activity.type === 'repay' && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {activity.type === 'collateral' && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          )}
                          {activity.type === 'warning' && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{activity.action}</div>
                          <div className="text-sm text-gray-500">{activity.time}</div>
                        </div>
                        {activity.amount && (
                          <div className="font-semibold text-gray-900">{activity.amount}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={handleRequestLoan}
                      className="w-full btn-primary text-left flex items-center justify-between"
                    >
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                        </svg>
                        Request New Loan
                      </span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button 
                      onClick={handleFundLoan}
                      className="w-full btn-secondary text-left flex items-center justify-between"
                    >
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                        </svg>
                        Fund Loan
                      </span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button 
                      onClick={handleAddCollateral}
                      className="w-full btn-outline text-left flex items-center justify-between"
                    >
                      <span>🛡️ Add Collateral</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">Health Status</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Health</span>
                        <span className="font-semibold">Excellent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Collateral Ratio</span>
                        <span className="font-semibold">142%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '71%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'borrowed' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Your Borrowed Loans</h3>
              <button 
                onClick={handleRequestLoan}
                className="btn-primary"
              >
                + Request New Loan
              </button>
            </div>
            
            {mockData.borrowed.map((loan) => (
              <div key={loan.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Loan #{loan.id}</div>
                      <div className="text-sm text-gray-500">Due {loan.dueDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      loan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {loan.status}
                    </span>
                    <div className={`text-right ${
                      loan.healthFactor < 1.2 ? 'text-red-600' : 
                      loan.healthFactor < 1.5 ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      <div className="text-sm font-medium">Health: {loan.healthFactor}</div>
                      <div className="text-xs">
                        {loan.healthFactor < 1.2 ? 'At Risk' : 
                         loan.healthFactor < 1.5 ? 'Warning' : 'Safe'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500">Borrowed</div>
                    <div className="font-semibold">{loan.amount}</div>
                    <div className="text-xs text-gray-400">{loan.amountUSD}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Interest Rate</div>
                    <div className="font-semibold text-primary-600">{loan.interestRate}</div>
                    <div className="text-xs text-gray-400">APR</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Owed</div>
                    <div className="font-semibold text-red-600">{loan.totalOwed}</div>
                    <div className="text-xs text-gray-400">{loan.totalOwedUSD}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Collateral</div>
                    <div className="font-semibold">{loan.collateral}</div>
                    <div className="text-xs text-gray-400">Locked</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Next Payment</div>
                    <div className="font-semibold">{loan.nextPayment}</div>
                    <div className="text-xs text-gray-400">{loan.nextPaymentDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Liquidation</div>
                    <div className="font-semibold">{loan.liquidationPrice}</div>
                    <div className="text-xs text-gray-400">ETH Price</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleRepayLoan(loan.id)}
                      className="btn-primary"
                    >
                      Make Payment
                    </button>
                    <button 
                      onClick={handleAddCollateral}
                      className="btn-secondary"
                    >
                      Add Collateral
                    </button>
                    <button 
                      onClick={() => handleViewDetails(loan.id, 'borrowed')}
                      className="btn-outline"
                    >
                      View Details
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Loan ID: {loan.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'lent' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <h3 className="text-lg font-semibold">Loans You've Funded</h3>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-auto">
                  <option>All Loans</option>
                  <option>Active</option>
                  <option>Completed</option>
                  <option>At Risk</option>
                </select>
                <button 
                  onClick={handleFundLoan}
                  className="btn-primary w-full sm:w-auto"
                >
                  + Browse Loans
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card bg-green-50 border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{mockData.analytics.avgLendingAPY}</div>
                  <div className="text-gray-700">Avg Lending APY</div>
                </div>
              </div>
              <div className="card bg-emerald-50 border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{mockData.lent.filter(l => l.status === 'Active').length}</div>
                  <div className="text-gray-700">Active Loans</div>
                </div>
              </div>
              <div className="card bg-teal-50 border-teal-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">{mockData.analytics.totalEarnings}</div>
                  <div className="text-gray-700">Total Earned</div>
                </div>
              </div>
            </div>
            
            {mockData.lent.map((loan) => (
              <div key={loan.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Funded Loan #{loan.id}</div>
                      <div className="text-sm text-gray-500">Borrower: {loan.borrower}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      loan.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                      loan.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {loan.riskLevel} Risk
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      loan.status === 'Active' ? 'bg-blue-100 text-blue-800' : 
                      loan.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {loan.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Amount Lent</div>
                    <div className="font-semibold text-sm sm:text-base">{loan.amount}</div>
                    <div className="text-xs text-gray-400">{loan.amountUSD}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Interest Rate</div>
                    <div className="font-semibold text-secondary-600 text-sm sm:text-base">{loan.interestRate}</div>
                    <div className="text-xs text-gray-400">APR</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Expected Return</div>
                    <div className="font-semibold text-green-600 text-sm sm:text-base">{loan.expectedReturn}</div>
                    <div className="text-xs text-gray-400">{loan.expectedReturnUSD}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Earned So Far</div>
                    <div className="font-semibold text-green-600 text-sm sm:text-base">{loan.earned}</div>
                    <div className="text-xs text-gray-400">{loan.earnedUSD}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Duration Left</div>
                    <div className="font-semibold text-sm sm:text-base">{loan.durationLeft}</div>
                    <div className="text-xs text-gray-400">Remaining</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Risk Level</div>
                    <div className={`font-semibold text-sm sm:text-base ${
                      loan.riskLevel === 'Low' ? 'text-green-600' :
                      loan.riskLevel === 'Medium' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>{loan.riskLevel}</div>
                    <div className="text-xs text-gray-400">Assessment</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 space-y-3 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    {loan.status === 'Active' && (
                      <>
                        <button 
                          onClick={() => handleMonitorLoan(loan.id)}
                          className="btn-secondary w-full sm:w-auto"
                        >
                          Monitor Loan
                        </button>
                        <button 
                          onClick={() => handleContactBorrower(loan.id)}
                          className="btn-outline w-full sm:w-auto"
                        >
                          Contact Borrower
                        </button>
                      </>
                    )}
                    {loan.status === 'Completed' && (
                      <button 
                        onClick={() => handleViewReceipt(loan.id)}
                        className="btn-outline w-full sm:w-auto"
                      >
                        View Receipt
                      </button>
                    )}
                    <button 
                      onClick={() => handleViewDetails(loan.id, 'lent')}
                      className="btn-outline w-full sm:w-auto"
                    >
                      View Details
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 text-center sm:text-right">
                    Loan ID: {loan.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{mockData.analytics.avgLendingAPY}</div>
                <div className="text-gray-700 font-medium">Avg Lending APY</div>
                <div className="text-sm text-blue-600 mt-1">↗ +0.3% this month</div>
              </div>
              <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">{mockData.analytics.avgBorrowingAPY}</div>
                <div className="text-gray-700 font-medium">Avg Borrow APY</div>
                <div className="text-sm text-purple-600 mt-1">↘ -0.2% this month</div>
              </div>
              <div className="card text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">{mockData.analytics.totalVolumeUSD}</div>
                <div className="text-gray-700 font-medium">Total Volume</div>
                <div className="text-sm text-green-600 mt-1">All-time trading</div>
              </div>
              <div className="card text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">{mockData.analytics.creditScore}</div>
                <div className="text-gray-700 font-medium">Credit Score</div>
                <div className="text-sm text-orange-600 mt-1">{mockData.analytics.creditHistory}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-lg font-semibold mb-6">Monthly Performance</h3>
                <div className="space-y-4">
                  {mockData.analytics.monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium">{data.month}</div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="text-green-600 font-semibold">+{data.earnings} ETH</div>
                          <div className="text-gray-500">Earned</div>
                        </div>
                        <div className="text-center">
                          <div className="text-blue-600 font-semibold">{data.borrowed} ETH</div>
                          <div className="text-gray-500">Borrowed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-purple-600 font-semibold">{data.lent} ETH</div>
                          <div className="text-gray-500">Lent</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-6">Risk Analysis</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Portfolio Risk Level</span>
                      <span className="text-sm text-green-600 font-semibold">{mockData.analytics.riskLevel}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Conservative</span>
                      <span>Aggressive</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Diversification Score</span>
                      <span className="text-sm text-blue-600 font-semibold">Good (72%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Liquidity Health</span>
                      <span className="text-sm text-green-600 font-semibold">Excellent (89%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-medium text-blue-900">Recommendation</div>
                        <div className="text-sm text-blue-700">Consider diversifying into medium-risk loans to increase returns while maintaining good portfolio health.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'collateral' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{mockData.collateral.totalDeposited} ETH</div>
                  <div className="text-gray-700 font-medium">Total Deposited</div>
                  <div className="text-sm text-primary-600">{mockData.collateral.totalDepositedUSD}</div>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{mockData.collateral.lockedInLoans} ETH</div>
                  <div className="text-gray-700 font-medium">Locked in Loans</div>
                  <div className="text-sm text-orange-600">{mockData.collateral.lockedInLoansUSD}</div>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{mockData.collateral.available} ETH</div>
                  <div className="text-gray-700 font-medium">Available</div>
                  <div className="text-sm text-green-600">{mockData.collateral.availableUSD}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-6 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Deposit Collateral
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Asset
                      </label>
                      <select className="input-field">
                        <option>ETH - Ethereum</option>
                        <option>WETH - Wrapped Ethereum</option>
                        <option>USDC - USD Coin</option>
                        <option>DAI - Dai Stablecoin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount to Deposit
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          className="input-field pr-20"
                          placeholder="0.0"
                          step="0.01"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <span className="text-gray-500 text-sm">ETH</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Available: {balance ? formatEther(balance.value) : '0'} ETH</span>
                        <button 
                          onClick={() => handleUseMax('deposit')}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          Use Max
                        </button>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-700">
                        <div className="flex justify-between mb-1">
                          <span>Estimated Gas Fee:</span>
                          <span className="font-medium">~$12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>New Borrowing Power:</span>
                          <span className="font-medium">+$1,200</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={handleDepositCollateral}
                      disabled={isLoading}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Processing...' : 'Deposit Collateral'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-6 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    Withdraw Collateral
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Asset
                      </label>
                      <select className="input-field">
                        <option>ETH - Available: {mockData.collateral.available} ETH</option>
                        <option>WETH - Available: 0.3 WETH</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount to Withdraw
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          className="input-field pr-20"
                          placeholder="0.0"
                          step="0.01"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <span className="text-gray-500 text-sm">ETH</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Available: {mockData.collateral.available} ETH</span>
                        <button 
                          onClick={() => handleUseMax('withdraw')}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          Use Max
                        </button>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-yellow-700">
                        <div className="flex justify-between mb-1">
                          <span>Health Factor Impact:</span>
                          <span className="font-medium">1.45 → 1.38</span>
                        </div>
                        <div className="flex justify-between">
                          <span>New Borrowing Power:</span>
                          <span className="font-medium">-$850</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={handleWithdrawCollateral}
                      disabled={isLoading}
                      className="btn-secondary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Processing...' : 'Withdraw Collateral'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-6">Collateral Portfolio</h3>
              
              {/* Mobile View */}
              <div className="block lg:hidden space-y-4">
                {mockData.collateral.assets.map((asset, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{asset.symbol.slice(0, 2)}</span>
                        </div>
                        <div>
                          <div className="font-medium">{asset.symbol}</div>
                          <div className="text-sm text-gray-500">
                            {asset.symbol === 'ETH' ? 'Ethereum' : 'Wrapped Ethereum'}
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <div className="text-xs text-gray-500">Amount</div>
                        <div className="font-medium">{asset.amount} {asset.symbol}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Value</div>
                        <div className="font-medium">{asset.value}</div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 mb-1">Allocation</div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: asset.percentage }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{asset.percentage}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 text-primary-600 hover:text-primary-700 text-sm font-medium py-2 border border-primary-200 rounded-lg">
                        Manage
                      </button>
                      <button className="flex-1 text-gray-600 hover:text-gray-700 text-sm font-medium py-2 border border-gray-200 rounded-lg">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Asset</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Value</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Allocation</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.collateral.assets.map((asset, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{asset.symbol.slice(0, 2)}</span>
                            </div>
                            <div>
                              <div className="font-medium">{asset.symbol}</div>
                              <div className="text-sm text-gray-500">
                                {asset.symbol === 'ETH' ? 'Ethereum' : 'Wrapped Ethereum'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium">{asset.amount} {asset.symbol}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium">{asset.value}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: asset.percentage }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{asset.percentage}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                              Manage
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                              Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Utilization Overview</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Collateral Utilization</span>
                      <span className="text-sm font-semibold">{mockData.collateral.utilizationRate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full" style={{ width: mockData.collateral.utilizationRate }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    You're using {mockData.collateral.utilizationRate} of your collateral capacity. 
                    Consider adding more collateral to improve your health factor.
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Risk Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Liquidation Threshold</span>
                    <span className="text-sm font-semibold">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Current LTV Ratio</span>
                    <span className="text-sm font-semibold text-orange-600">69.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Min Health Factor</span>
                    <span className="text-sm font-semibold text-green-600">1.32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Risk Level</span>
                    <span className="text-sm font-semibold text-yellow-600">Moderate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

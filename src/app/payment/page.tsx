'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAccount, useBalance } from 'wagmi'
import { formatEther } from 'viem'

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const loanId = searchParams.get('loanId') || '1'
  const { address } = useAccount()
  const { data: balance } = useBalance({ address })
  
  const [paymentAmount, setPaymentAmount] = useState('')
  const [paymentType, setPaymentType] = useState<'minimum' | 'interest' | 'full' | 'custom'>('minimum')
  const [isProcessing, setIsProcessing] = useState(false)
  
  // Mock loan data - in real app this would be fetched based on loanId
  const loanData = {
    id: loanId,
    principal: '2.5 ETH',
    interestRate: '6.5%',
    minimumPayment: '0.1 ETH',
    interestOnly: '0.08 ETH',
    totalOwed: '2.58 ETH',
    nextDueDate: 'Jan 15, 2025',
    daysUntilDue: 14,
    collateral: '4.2 ETH',
    healthFactor: 2.1
  }

  const paymentOptions = {
    minimum: { amount: '0.1', label: 'Minimum Payment', description: 'Required monthly payment' },
    interest: { amount: '0.08', label: 'Interest Only', description: 'Cover interest charges' },
    full: { amount: '2.58', label: 'Full Payment', description: 'Pay off loan completely' },
    custom: { amount: paymentAmount, label: 'Custom Amount', description: 'Enter your own amount' }
  }

  const handlePaymentTypeChange = (type: 'minimum' | 'interest' | 'full' | 'custom') => {
    setPaymentType(type)
    if (type !== 'custom') {
      setPaymentAmount(paymentOptions[type].amount)
    }
  }

  const handleUseMax = () => {
    if (balance) {
      // Leave some ETH for gas fees
      const maxAmount = Math.max(0, parseFloat(formatEther(balance.value)) - 0.01)
      setPaymentAmount(maxAmount.toString())
      setPaymentType('custom')
    }
  }

  const handleSubmitPayment = async () => {
    setIsProcessing(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      alert(`Payment of ${paymentAmount} ETH submitted successfully for Loan #${loanId}!`)
      
      // Redirect back to dashboard
      router.push('/dashboard')
    } catch (error) {
      alert('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const currentAmount = paymentType === 'custom' ? paymentAmount : paymentOptions[paymentType].amount

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Make Payment</h1>
          <p className="text-gray-600 mt-2">Loan #{loanId} Payment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Loan Summary */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Loan Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Principal Amount</div>
                  <div className="text-lg font-semibold">{loanData.principal}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Interest Rate</div>
                  <div className="text-lg font-semibold">{loanData.interestRate}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Total Owed</div>
                  <div className="text-lg font-semibold text-red-600">{loanData.totalOwed}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Next Due Date</div>
                  <div className="text-lg font-semibold">{loanData.nextDueDate}</div>
                </div>
              </div>
              
              {loanData.daysUntilDue <= 7 && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium text-yellow-800">Payment Due Soon</h3>
                      <p className="text-sm text-yellow-700">Your payment is due in {loanData.daysUntilDue} days.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Options */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Payment Amount</h2>
              <div className="space-y-4">
                {Object.entries(paymentOptions).map(([key, option]) => (
                  <div 
                    key={key}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentType === key 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePaymentTypeChange(key as any)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <input
                          type="radio"
                          checked={paymentType === key}
                          onChange={() => handlePaymentTypeChange(key as any)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-sm text-gray-500">{option.description}</div>
                        </div>
                      </div>
                      {key !== 'custom' && (
                        <div className="text-lg font-semibold">{option.amount} ETH</div>
                      )}
                    </div>
                    
                    {key === 'custom' && paymentType === 'custom' && (
                      <div className="mt-3">
                        <div className="relative">
                          <input
                            type="number"
                            value={paymentAmount}
                            onChange={(e) => setPaymentAmount(e.target.value)}
                            placeholder="0.0"
                            step="0.01"
                            min="0"
                            className="input-field pr-20"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <span className="text-gray-500 text-sm">ETH</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>Available: {balance ? parseFloat(formatEther(balance.value)).toFixed(4) : '0'} ETH</span>
                          <button 
                            onClick={handleUseMax}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            Use Max
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction Details */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Transaction Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Payment Amount</span>
                  <span className="font-semibold">{currentAmount} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Gas Fee</span>
                  <span className="font-semibold">~0.002 ETH</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>USD Value (Estimated)</span>
                  <span>${(parseFloat(currentAmount || '0') * 1700).toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{(parseFloat(currentAmount || '0') + 0.002).toFixed(4)} ETH</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitPayment}
              disabled={!currentAmount || parseFloat(currentAmount) <= 0 || isProcessing}
              className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing Payment...' : `Pay ${currentAmount} ETH`}
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Factor */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Loan Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Health Factor</span>
                    <span className="font-semibold text-green-600">{loanData.healthFactor}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(loanData.healthFactor * 30, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {loanData.healthFactor > 1.5 ? 'Healthy' : loanData.healthFactor > 1.2 ? 'Moderate Risk' : 'High Risk'}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Collateral Value</div>
                  <div className="font-semibold">{loanData.collateral}</div>
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Dec 15, 2024</span>
                  <span className="font-medium">0.1 ETH</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Nov 15, 2024</span>
                  <span className="font-medium">0.1 ETH</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Oct 15, 2024</span>
                  <span className="font-medium">0.1 ETH</span>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="card bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Need Help?</h3>
              <p className="text-sm text-blue-700 mb-4">
                If you're having trouble making a payment or need to discuss your loan terms, we're here to help.
              </p>
              <button className="btn-outline text-blue-600 border-blue-300 hover:bg-blue-100 w-full">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment page...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}

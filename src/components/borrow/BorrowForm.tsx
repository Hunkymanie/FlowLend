'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'

interface LoanRequest {
  amount: string
  collateralType: string
  collateralAmount: string
  duration: string
  maxInterestRate: string
}

export function BorrowForm() {
  const { isConnected, address } = useAccount()
  const [formData, setFormData] = useState<LoanRequest>({
    amount: '',
    collateralType: 'ETH',
    collateralAmount: '',
    duration: '30',
    maxInterestRate: '12',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calculate required collateral (150% of loan amount)
  const requiredCollateral = formData.amount ? (parseFloat(formData.amount) * 1.5).toFixed(4) : '0'
  
  // Calculate estimated monthly payment
  const monthlyPayment = formData.amount && formData.maxInterestRate ? 
    (parseFloat(formData.amount) * (1 + parseFloat(formData.maxInterestRate) / 100) / parseInt(formData.duration || '1')).toFixed(6) : '0'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    if (parseFloat(formData.collateralAmount) < parseFloat(requiredCollateral)) {
      alert(`Insufficient collateral. Minimum required: ${requiredCollateral} ${formData.collateralType}`)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // TODO: Implement smart contract interaction
      console.log('Submitting loan request:', {
        ...formData,
        borrower: address,
        timestamp: new Date().toISOString(),
        status: 'pending'
      })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Loan request submitted successfully!')
      
      // Reset form
      setFormData({
        amount: '',
        collateralType: 'ETH',
        collateralAmount: '',
        duration: '30',
        maxInterestRate: '12',
      })
    } catch (error) {
      console.error('Error submitting loan request:', error)
      alert('Failed to submit loan request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof LoanRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (!isConnected) {
    return (
      <div className="card text-center">
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <p className="text-gray-600 mb-6">
          Please connect your wallet to request a loan
        </p>
        <div className="inline-block px-6 py-3 bg-gray-100 text-gray-500 rounded-lg">
          Wallet Connection Required
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Request a Loan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (USDC)
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  min="100"
                  max="1000000"
                  step="0.01"
                  required
                  className="input-field"
                  placeholder="e.g., 10000"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum: 100 USDC • Maximum: 1,000,000 USDC
                </p>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (Days)
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="7">7 Days</option>
                  <option value="14">14 Days</option>
                  <option value="30">30 Days</option>
                  <option value="60">60 Days</option>
                  <option value="90">90 Days</option>
                  <option value="180">180 Days</option>
                  <option value="365">365 Days</option>
                </select>
              </div>

              {/* Collateral Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Collateral Type
                  </label>
                  <select
                    value={formData.collateralType}
                    onChange={(e) => handleInputChange('collateralType', e.target.value)}
                    className="input-field"
                    required
                  >
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="WBTC">Wrapped Bitcoin (WBTC)</option>
                    <option value="USDT">Tether (USDT)</option>
                    <option value="DAI">Dai (DAI)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Collateral Amount ({formData.collateralType})
                  </label>
                  <input
                    type="number"
                    value={formData.collateralAmount}
                    onChange={(e) => handleInputChange('collateralAmount', e.target.value)}
                    min={requiredCollateral}
                    step="0.0001"
                    required
                    className="input-field"
                    placeholder={`Min: ${requiredCollateral}`}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum required: {requiredCollateral} {formData.collateralType} (150% LTV)
                  </p>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Interest Rate (% APR)
                </label>
                <input
                  type="number"
                  value={formData.maxInterestRate}
                  onChange={(e) => handleInputChange('maxInterestRate', e.target.value)}
                  min="0.1"
                  max="100"
                  step="0.1"
                  required
                  className="input-field"
                  placeholder="e.g., 12.5"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Current market rates: 5-25% APR
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.amount || !formData.collateralAmount}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Loan Request'}
              </button>
            </form>
          </div>
        </div>

        {/* Loan Summary Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Loan Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-medium">{formData.amount || '0'} USDC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Term:</span>
                <span className="font-medium">{formData.duration} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max APR:</span>
                <span className="font-medium">{formData.maxInterestRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Collateral:</span>
                <span className="font-medium">{formData.collateralAmount || '0'} {formData.collateralType}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold">
                <span>Est. Daily Payment:</span>
                <span>{monthlyPayment} USDC</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Risk Assessment</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Loan-to-Value:</span>
                <span className={`font-medium ${parseFloat(formData.collateralAmount) >= parseFloat(requiredCollateral) ? 'text-green-600' : 'text-red-600'}`}>
                  {formData.amount && formData.collateralAmount 
                    ? ((parseFloat(formData.amount) / parseFloat(formData.collateralAmount)) * 100).toFixed(1) + '%'
                    : '0%'
                  }
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Risk Level:</span>
                <span className={`font-medium ${parseFloat(formData.maxInterestRate) < 10 ? 'text-green-600' : parseFloat(formData.maxInterestRate) < 20 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {parseFloat(formData.maxInterestRate) < 10 ? 'Low' : parseFloat(formData.maxInterestRate) < 20 ? 'Medium' : 'High'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Approval Chance:</span>
                <span className="font-medium text-emerald-600">
                  {formData.amount && formData.collateralAmount && parseFloat(formData.collateralAmount) >= parseFloat(requiredCollateral) ? 'High' : 'Low'}
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Important Notes</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Collateral will be locked until loan is repaid</li>
              <li>• Interest accrues daily</li>
              <li>• Early repayment is allowed</li>
              <li>• Liquidation occurs if collateral value drops below 120% LTV</li>
              <li>• All transactions are on-chain and verifiable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

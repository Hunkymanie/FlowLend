import { BorrowForm } from '../../components/borrow/BorrowForm'

export default function BorrowPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Enhanced Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 inline mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
              </svg>
              Get Your Loan Today
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
              Access instant liquidity with competitive rates. Secure, fast, and transparent lending powered by DeFi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">5.5%</div>
                <div className="text-xs sm:text-sm text-primary-200">Starting APR</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">5 min</div>
                <div className="text-xs sm:text-sm text-primary-200">Approval Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">$2M+</div>
                <div className="text-xs sm:text-sm text-primary-200">Available Liquidity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <BorrowForm />
          </div>
          
          <div className="space-y-6">
            {/* Enhanced How it works */}
            <div className="card bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How it works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Deposit Collateral</h4>
                    <p className="text-sm text-gray-600">Secure your loan with crypto assets. Maintain full ownership.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Submit Request</h4>
                    <p className="text-sm text-gray-600">Choose amount, terms, and get instant approval based on collateral ratio.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Matched</h4>
                    <p className="text-sm text-gray-600">Our algorithm matches you with the best lenders automatically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Receive Funds</h4>
                    <p className="text-sm text-gray-600">Get funds instantly in your wallet. Start using immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Requirements */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Loan Requirements
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Minimum 130% collateral ratio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Supported collateral: ETH, WETH, USDC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Loan terms: 30 days to 2 years</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No credit checks required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Global access, 24/7 availability</span>
                </div>
              </div>
            </div>

            {/* Current Rates */}
            <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Current Rates
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">30-day loans</span>
                  <span className="font-semibold text-green-600">5.5% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">6-month loans</span>
                  <span className="font-semibold text-green-600">6.8% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">1-year loans</span>
                  <span className="font-semibold text-green-600">7.2% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">2-year loans</span>
                  <span className="font-semibold text-green-600">8.1% APR</span>
                </div>
                <div className="pt-2 border-t border-green-200">
                  <div className="text-xs text-green-700 bg-green-200/50 p-2 rounded">
                    ⚡ Rates update in real-time based on market conditions
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Calculator */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Risk Assessment
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Liquidation Risk</span>
                    <span className="font-semibold">Low</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 bg-orange-50 p-3 rounded">
                  <strong>💡 Pro Tip:</strong> Maintain a health factor above 1.5 to avoid liquidation risk. 
                  Monitor ETH price movements and consider adding collateral if needed.
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="card bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25A9.75 9.75 0 112.25 12 9.75 9.75 0 0112 2.25z" />
                </svg>
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our team is here to help you navigate the borrowing process safely and efficiently.
              </p>
              <div className="space-y-2">
                <button className="w-full btn-outline text-left flex items-center justify-between">
                  <span>📖 View Documentation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full btn-outline text-left flex items-center justify-between">
                  <span>💬 Chat Support</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

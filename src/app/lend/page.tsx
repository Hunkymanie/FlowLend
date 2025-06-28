'use client'

import { LoansList } from '../../components/lend/LoansList'
import { LendingStats } from '../../components/lend/LendingStats'
import Link from 'next/link'

export default function LendPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Enhanced Header */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 inline mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
              </svg>
              Lend & Earn Premium Returns
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-100 mb-6 sm:mb-8 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
              Join thousands of lenders earning attractive yields. Secure, automated, and transparent lending with full control.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">8.2%</div>
                <div className="text-xs sm:text-sm text-secondary-200">Avg APY</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">$2.1M</div>
                <div className="text-xs sm:text-sm text-secondary-200">Total Funded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">98.7%</div>
                <div className="text-xs sm:text-sm text-secondary-200">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">247</div>
                <div className="text-xs sm:text-sm text-secondary-200">Active Loans</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Enhanced Benefits Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              Why Lend with FlowLend?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Professional-grade lending platform with institutional security and retail accessibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center mx-4 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Higher Returns</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2 sm:px-0">
                Earn 5-12% APY on your crypto - significantly higher than traditional savings accounts.
              </p>
              <div className="bg-green-200/50 p-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-green-700">8.2%</div>
                <div className="text-xs sm:text-sm text-green-600">Average APY</div>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-center mx-4 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Secure & Protected</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2 sm:px-0">
                All loans are over-collateralized. Smart contracts ensure automatic loan repayment and liquidation.
              </p>
              <div className="bg-blue-200/50 p-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-700">130%+</div>
                <div className="text-xs sm:text-sm text-blue-600">Min Collateral</div>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-center mx-4 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Full Control</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2 sm:px-0">
                Choose which loans to fund, set your terms, and withdraw earnings anytime. Complete transparency.
              </p>
              <div className="bg-purple-200/50 p-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-purple-700">24/7</div>
                <div className="text-xs sm:text-sm text-purple-600">Liquidity Access</div>
              </div>
            </div>
          </div>
        </div>
        
        <LendingStats />
        
        {/* Enhanced Loans Section */}
        <div id="loans-section" className="mt-12 sm:mt-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 space-y-4 lg:space-y-0">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Available Loan Requests</h2>
              <p className="text-sm sm:text-base text-gray-600">Browse and fund verified loan requests from borrowers worldwide</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
              <select className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm w-full sm:w-auto">
                <option>All Risk Levels</option>
                <option>Low Risk Only</option>
                <option>Medium Risk</option>
                <option>High Risk</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm w-full sm:w-auto">
                <option>Sort by APY</option>
                <option>Sort by Amount</option>
                <option>Sort by Duration</option>
                <option>Sort by Risk</option>
              </select>
            </div>
          </div>
          
          <LoansList />
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Everything you need to know about lending on FlowLend
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="card mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">How do I earn interest?</h3>
              <p className="text-sm sm:text-base text-gray-600">
                When you fund a loan, you immediately start earning interest based on the agreed APY. 
                Interest compounds and is paid automatically when the borrower makes payments.
              </p>
            </div>
            
            <div className="card mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">What if a borrower defaults?</h3>
              <p className="text-sm sm:text-base text-gray-600">
                All loans are over-collateralized (130%+). If a borrower defaults, the collateral is 
                automatically liquidated to repay lenders, protecting your principal investment.
              </p>
            </div>
            
            <div className="card mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Can I withdraw my funds anytime?</h3>
              <p className="text-sm sm:text-base text-gray-600">
                You can withdraw earnings anytime. Principal can be withdrawn when loans are repaid 
                or you can sell your loan positions on our secondary market for immediate liquidity.
              </p>
            </div>
            
            <div className="card mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">How are interest rates determined?</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Rates are market-driven based on supply and demand. Borrowers propose rates, and lenders 
                can accept or counter-offer. Higher risk loans typically offer higher returns.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-secondary-600 to-secondary-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white mx-4 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Start Earning Today
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
            Join thousands of lenders who have already earned over $500K in interest on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button 
              onClick={() => document.getElementById('loans-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-secondary-600 font-semibold py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              Browse Loans
            </button>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <button className="border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white hover:text-secondary-600 transition-colors w-full text-sm sm:text-base">
                View Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

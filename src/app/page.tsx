import Link from 'next/link'
import { Features } from '../components/ui/Features'
import { Stats } from '../components/ui/Stats'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-4 sm:py-6 lg:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-3 sm:mb-4">
              <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-primary-500/20 text-primary-100 backdrop-blur-sm">
                New: Advanced DeFi Analytics Dashboard
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              FlowLend
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-primary-100 font-light leading-relaxed px-4 sm:px-0">
              The Future of Decentralized Lending
            </p>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 text-primary-200 max-w-2xl mx-auto px-4 sm:px-0">
              Secure peer-to-peer lending with competitive rates, instant approvals, 
              and professional-grade risk management. Join thousands of users earning and borrowing on DeFi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
              <Link href="/borrow" className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                  </svg>
                  Get a Loan
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/lend" className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                  </svg>
                  Start Earning
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 max-w-2xl mx-auto px-4 sm:px-0">
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">$12.5M+</div>
                <div className="text-xs sm:text-sm text-primary-200">Total Volume</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">8.2%</div>
                <div className="text-xs sm:text-sm text-primary-200">Avg APY</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">2,547</div>
                <div className="text-xs sm:text-sm text-primary-200">Active Users</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400/10 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/10 rounded-full filter blur-xl"></div>
      </section>

      <Stats />
      
      {/* Enhanced Value Proposition */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              Why Choose FlowLend?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Experience the next generation of decentralized finance with institutional-grade security 
              and user-friendly design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-200 mx-4 sm:mx-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Bank-Grade Security</h3>
              <p className="text-sm text-gray-600">
                Multi-signature wallets, smart contract audits, and insurance coverage protect your funds 24/7.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-green-200 mx-4 sm:mx-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Competitive Rates</h3>
              <p className="text-sm text-gray-600">
                Earn up to 12% APY on your crypto or borrow at rates as low as 5.5% with flexible terms.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-purple-200 mx-4 sm:mx-0 md:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Instant Settlements</h3>
              <p className="text-sm text-gray-600">
                Lightning-fast transactions with automated smart contracts. No waiting, no intermediaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Features />
      
      {/* Enhanced How It Works */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              How FlowLend Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
              Simple, secure, and transparent lending in three easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* For Borrowers */}
            <div className="px-4 sm:px-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                </svg>
                For Borrowers
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Deposit Collateral</h4>
                    <p className="text-gray-600 text-sm">Secure your loan by depositing crypto assets as collateral. Your funds remain yours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Request Your Loan</h4>
                    <p className="text-gray-600 text-sm">Choose your terms, amount, and duration. Get instant approval based on your collateral.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Receive Funds</h4>
                    <p className="text-gray-600 text-sm">Get your loan instantly in your wallet. Use the funds for whatever you need.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For Lenders */}
            <div className="px-4 sm:px-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                </svg>
                For Lenders
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Browse Loan Requests</h4>
                    <p className="text-gray-600 text-sm">Explore verified loan requests with detailed risk assessments and borrower profiles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Fund Loans</h4>
                    <p className="text-gray-600 text-sm">Choose loans that match your risk profile and expected returns. Fund partially or fully.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Earn Interest</h4>
                    <p className="text-gray-600 text-sm">Receive automatic payments with interest. Track your earnings in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Ready to Transform Your DeFi Experience?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of users who trust FlowLend for secure, profitable, and transparent lending.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Link 
              href="/borrow" 
              className="group bg-white text-primary-600 font-semibold py-3 px-6 sm:px-8 rounded-lg text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                </svg>
                Get Your Loan Now
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/lend" 
              className="group border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-lg text-base hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z M6,4H13V9H18V20H6V4Z M8,12V14H16V12H8Z M8,16V18H13V16H8Z"/>
                </svg>
                Start Earning Today
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 max-w-3xl mx-auto px-4 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 text-center">
              <div className="text-sm sm:text-lg lg:text-xl font-bold mb-1">99.9%</div>
              <div className="text-xs sm:text-sm text-blue-100">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 text-center">
              <div className="text-sm sm:text-lg lg:text-xl font-bold mb-1">$0</div>
              <div className="text-xs sm:text-sm text-blue-100">Hidden Fees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 text-center">
              <div className="text-sm sm:text-lg lg:text-xl font-bold mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-white/5 rounded-full filter blur-xl"></div>
      </section>
    </main>
  )
}

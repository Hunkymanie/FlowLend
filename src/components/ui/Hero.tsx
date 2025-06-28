import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium">Decentralized • Secure • Transparent</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Decentralized Lending
            <br />
            <span className="bg-gradient-to-r from-primary-200 to-white bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-100 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Connect directly with lenders and borrowers. No banks, no intermediaries. 
            Just transparent, secure, and efficient peer-to-peer lending.
          </p>
          
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Link 
              href="/borrow" 
              className="w-full sm:w-auto group bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                </svg>
                Get a Loan
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/lend" 
              className="w-full sm:w-auto group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                </svg>
                Start Earning
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">$50M+</div>
              <div className="text-primary-200 text-xs sm:text-sm">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">12%</div>
              <div className="text-primary-200 text-xs sm:text-sm">Avg. APY</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">5K+</div>
              <div className="text-primary-200 text-xs sm:text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">99.9%</div>
              <div className="text-primary-200 text-xs sm:text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const features = [
    {
      title: 'Bank-Grade Security',
      description: 'Multi-signature wallets, smart contract audits, and insurance coverage protect your funds with institutional-grade security.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C10.89,7 10,7.89 10,9V11C9.45,11 9,11.45 9,12V16C9,16.55 9.45,17 10,17H14C14.55,17 15,16.55 15,16V12C15,11.45 14.55,11 14,11V9C14,7.89 13.11,7 12,7M12,8C12.56,8 13,8.44 13,9V11H11V9C11,8.44 11.44,8 12,8Z"/>
        </svg>
      ),
      color: 'emerald',
      stats: '99.9% Uptime'
    },
    {
      title: 'Superior Returns',
      description: 'Earn 5-12% APY on your crypto assets - significantly higher than traditional savings accounts and CDs.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      ),
      color: 'teal',
      stats: '8.2% Avg APY'
    },
    {
      title: 'Lightning Fast',
      description: 'Instant loan approvals and settlements. No waiting periods, paperwork, or credit checks required.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7,2V13H10V22L17,10H13L17,2H7Z"/>
        </svg>
      ),
      color: 'emerald',
      stats: '<5 min Average'
    },
    {
      title: 'Risk Management',
      description: 'Advanced algorithms assess borrower risk. All loans are over-collateralized with automatic liquidation protection.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C10.89,7 10,7.89 10,9V11C9.45,11 9,11.45 9,12V16C9,16.55 9.45,17 10,17H14C14.55,17 15,16.55 15,16V12C15,11.45 14.55,11 14,11V9C14,7.89 13.11,7 12,7M12,8C12.56,8 13,8.44 13,9V11H11V9C11,8.44 11.44,8 12,8Z"/>
        </svg>
      ),
      color: 'teal',
      stats: '130%+ Collateral'
    },
    {
      title: 'Global & Permissionless',
      description: 'Available 24/7 worldwide. No geographic restrictions, banking hours, or KYC requirements.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,4.07C6.81,4.56 3.56,7.81 3.07,12H11M13,4.07V12H20.93C20.44,7.81 17.19,4.56 13,4.07M20.93,14H13V21.93C17.19,21.44 20.44,18.19 20.93,14M11,21.93V14H3.07C3.56,18.19 6.81,21.44 11,21.93Z"/>
        </svg>
      ),
      color: 'emerald',
      stats: '150+ Countries'
    },
    {
      title: 'Full Transparency',
      description: 'All transactions, terms, and data are public on the blockchain. Complete audit trail and immutable records.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
        </svg>
      ),
      color: 'teal',
      stats: '100% On-Chain'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Advanced DeFi Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Experience institutional-grade DeFi lending with cutting-edge technology, 
            professional tools, and uncompromising security standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`card bg-gradient-to-br hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group p-4 sm:p-6 ${
              feature.color === 'emerald' ? 'from-emerald-50 to-emerald-100 border-emerald-200' :
              'from-teal-50 to-teal-100 border-teal-200'
            }`}>
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                  feature.color === 'emerald' ? 'bg-emerald-600' : 'bg-teal-600'
                }`}>
                  {feature.icon}
                </div>
                <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                  feature.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 'bg-teal-100 text-teal-600'
                }`}>
                  {feature.stats}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Experience the Future of Finance?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
              Join the DeFi revolution with FlowLend's professional-grade lending platform.
            </p>
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4 justify-center px-4 sm:px-0">
              <button className="w-full sm:w-auto bg-white text-primary-600 font-semibold py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                Start Lending
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white hover:text-primary-600 transition-colors">
                Get a Loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

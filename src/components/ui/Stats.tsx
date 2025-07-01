export function Stats() {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
        </svg>
      ),
      label: 'Total Volume Lent',
      value: '$125M+',
      change: '+12.5%',
      positive: true
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
        </svg>
      ),
      label: 'Active Loans',
      value: '12,500+',
      change: '+8.2%',
      positive: true
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      ),
      label: 'Average APY',
      value: '15.2%',
      change: '+2.1%',
      positive: true
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 13C18.7 13 22 14.3 22 17V20H10V17C10 14.3 13.3 13 16 13Z M8 12C10.2 12 12 10.2 12 8S10.2 4 8 4 4 5.8 4 8 5.8 12 8 12Z M8 13C5.3 13 0 14.3 0 17V20H8V17C8 15.5 8.8 14.3 10 13.5C9.4 13.2 8.7 13 8 13Z"/>
        </svg>
      ),
      label: 'Total Users',
      value: '45,000+',
      change: '+15%',
      positive: true
    },
  ]

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Platform <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg sm:max-w-xl mx-auto px-4 sm:px-0">
            Real-time metrics showcasing the growth and performance of our decentralized lending ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3 lg:p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-1 sm:mb-2 lg:mb-3 text-primary-600">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 mb-1 text-xs sm:text-sm">{stat.label}</div>
                <div className="text-xs text-secondary-600 font-medium">
                  {stat.change} from last month
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

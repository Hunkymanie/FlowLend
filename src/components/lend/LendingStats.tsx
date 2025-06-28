export function LendingStats() {
  const stats = [
    { label: 'Available to Lend', value: '156.8 ETH', subtext: '$415,420' },
    { label: 'Your Earnings', value: '2.4 ETH', subtext: 'Last 30 days' },
    { label: 'Active Loans', value: '12', subtext: 'Funded by you' },
    { label: 'Avg. APY', value: '8.2%', subtext: 'Your portfolio' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
      {stats.map((stat, index) => (
        <div key={index} className="card text-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600 mb-1">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium mb-1">{stat.label}</div>
          <div className="text-xs sm:text-sm text-gray-500">{stat.subtext}</div>
        </div>
      ))}
    </div>
  )
}

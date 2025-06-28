import { UserDashboard } from '@/components/dashboard/UserDashboard'

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your loans, track earnings, and monitor your portfolio
          </p>
        </div>
        
        <UserDashboard />
      </div>
    </div>
  )
}

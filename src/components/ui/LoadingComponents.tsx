export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary-600 ${sizeClasses[size]}`}></div>
  )
}

export function SkeletonCard() {
  return (
    <div className="card animate-pulse">
      <div className="flex space-x-4">
        <div className="rounded-full bg-gray-200 h-12 w-12"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AnimatedCounter({ value, suffix = '' }: { value: string, suffix?: string }) {
  return (
    <div className="text-2xl font-bold text-primary-600 mb-1 transition-all duration-500 transform hover:scale-110">
      {value}{suffix}
    </div>
  )
}

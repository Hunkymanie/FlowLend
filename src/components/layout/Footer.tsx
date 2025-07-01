import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-50 to-secondary-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">₿</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                FlowLend
              </h3>
            </div>
            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
              Decentralized lending platform connecting borrowers and lenders 
              directly on Ethereum for transparency and security.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live on Ethereum Mainnet</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 text-sm">Platform</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/borrow" className="hover:text-primary-600 transition-colors duration-200">
                  <span>Borrow</span>
                </Link>
              </li>
              <li>
                <Link href="/lend" className="hover:text-primary-600 transition-colors duration-200">
                  <span>Lend</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary-600 transition-colors duration-200">
                  <span>Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 text-sm">Support</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/docs" className="hover:text-primary-600 transition-colors duration-200">
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-600 transition-colors duration-200">
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-600 transition-colors duration-200">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">&copy; 2025 FlowLend. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-3 sm:mt-0">
            <span className="text-xs text-gray-500">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">Next.js</span>
              <span className="text-xs px-1.5 py-0.5 bg-primary-100 text-primary-700 rounded">Ethereum</span>
              <span className="text-xs px-1.5 py-0.5 bg-secondary-100 text-secondary-700 rounded">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

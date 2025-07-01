'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀'
    },
    {
      id: 'borrowing',
      title: 'Borrowing',
      icon: '💰'
    },
    {
      id: 'lending',
      title: 'Lending',
      icon: '🏦'
    },
    {
      id: 'collateral',
      title: 'Collateral Management',
      icon: '🛡️'
    },
    {
      id: 'smart-contracts',
      title: 'Smart Contracts',
      icon: '📋'
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: '⚡'
    },
    {
      id: 'security',
      title: 'Security',
      icon: '🔒'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
              <p className="text-gray-600 mt-2">Complete guide to using FlowLend</p>
            </div>
            <Link 
              href="/"
              className="btn-outline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="card sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                      activeSection === section.id
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{section.icon}</span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="card">
              {activeSection === 'getting-started' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>🚀</span>
                    <span>Getting Started</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>Welcome to FlowLend</h3>
                    <p>FlowLend is a decentralized lending platform that connects borrowers and lenders directly on the Ethereum blockchain. No intermediaries, no hidden fees, just transparent peer-to-peer lending.</p>
                    
                    <h3>Prerequisites</h3>
                    <ul>
                      <li>MetaMask or compatible Web3 wallet</li>
                      <li>ETH for gas fees</li>
                      <li>Collateral assets (ETH, WBTC, USDC, etc.)</li>
                    </ul>

                    <h3>Quick Start Guide</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ol className="space-y-2">
                        <li><strong>1. Connect Wallet:</strong> Click "Connect Wallet" and approve the connection</li>
                        <li><strong>2. Deposit Collateral:</strong> Navigate to Dashboard → Collateral and deposit your assets</li>
                        <li><strong>3. Start Borrowing/Lending:</strong> Use the Borrow or Lend sections based on your needs</li>
                        <li><strong>4. Monitor:</strong> Track your positions in the Dashboard</li>
                      </ol>
                    </div>

                    <h3>Supported Networks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800">Ethereum Mainnet</h4>
                        <p className="text-green-600 text-sm">Fully supported with all features</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800">Sepolia Testnet</h4>
                        <p className="text-yellow-600 text-sm">Available for testing</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'borrowing' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>💰</span>
                    <span>Borrowing Guide</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>How Borrowing Works</h3>
                    <p>FlowLend uses over-collateralized loans to ensure security for lenders. You must deposit collateral worth more than the amount you wish to borrow.</p>

                    <h3>Collateral Requirements</h3>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800">Minimum Collateral Ratio: 150%</h4>
                      <p className="text-amber-700 text-sm">To borrow $1000, you need at least $1500 in collateral</p>
                    </div>

                    <h3>Borrowing Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">1</div>
                        <div>
                          <h4 className="font-semibold">Deposit Collateral</h4>
                          <p className="text-gray-600">Deposit supported assets as collateral</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">2</div>
                        <div>
                          <h4 className="font-semibold">Create Loan Request</h4>
                          <p className="text-gray-600">Specify amount, duration, and interest rate</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">3</div>
                        <div>
                          <h4 className="font-semibold">Get Funded</h4>
                          <p className="text-gray-600">Lenders review and fund your request</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">4</div>
                        <div>
                          <h4 className="font-semibold">Repay Loan</h4>
                          <p className="text-gray-600">Make payments according to your schedule</p>
                        </div>
                      </div>
                    </div>

                    <h3>Interest Rates</h3>
                    <p>Interest rates are determined by market conditions and your collateral ratio. Higher collateral ratios typically result in lower interest rates.</p>
                  </div>
                </div>
              )}

              {activeSection === 'lending' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>🏦</span>
                    <span>Lending Guide</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>Earn by Lending</h3>
                    <p>Lend your crypto assets to borrowers and earn competitive interest rates. All loans are over-collateralized for your protection.</p>

                    <h3>Risk Assessment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800">Low Risk</h4>
                        <ul className="text-green-600 text-sm space-y-1">
                          <li>• Collateral ratio &gt; 200%</li>
                          <li>• Short-term loans</li>
                          <li>• Established borrowers</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800">Medium Risk</h4>
                        <ul className="text-yellow-600 text-sm space-y-1">
                          <li>• Collateral ratio 150-200%</li>
                          <li>• Medium-term loans</li>
                          <li>• Mixed borrower history</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800">Higher Risk</h4>
                        <ul className="text-red-600 text-sm space-y-1">
                          <li>• Collateral ratio ~150%</li>
                          <li>• Long-term loans</li>
                          <li>• New borrowers</li>
                        </ul>
                      </div>
                    </div>

                    <h3>Expected Returns</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold">Typical APY Range: 4-12%</p>
                      <p className="text-blue-600 text-sm">Returns vary based on loan duration, collateral ratio, and market conditions</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'collateral' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>🛡️</span>
                    <span>Collateral Management</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>Supported Collateral Assets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Primary Assets</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• ETH (Ethereum)</li>
                          <li>• WBTC (Wrapped Bitcoin)</li>
                          <li>• USDC (USD Coin)</li>
                          <li>• USDT (Tether)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Secondary Assets</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• DAI (Dai Stablecoin)</li>
                          <li>• LINK (Chainlink)</li>
                          <li>• UNI (Uniswap)</li>
                          <li>• AAVE (Aave Token)</li>
                        </ul>
                      </div>
                    </div>

                    <h3>Health Factor</h3>
                    <p>Your health factor indicates the safety of your position. It's calculated as:</p>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                      Health Factor = (Collateral Value × Liquidation Threshold) / Total Debt
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span><strong>Health Factor &gt; 1.5:</strong> Safe position</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span><strong>Health Factor 1.1-1.5:</strong> Monitor closely</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span><strong>Health Factor &lt; 1.1:</strong> Risk of liquidation</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'smart-contracts' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>📋</span>
                    <span>Smart Contracts</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>Contract Addresses</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold">FlowLend Core Contract</h4>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">0x1234...5678</code>
                        <p className="text-sm text-gray-600 mt-2">Main lending protocol contract</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold">Collateral Manager</h4>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">0xabcd...efgh</code>
                        <p className="text-sm text-gray-600 mt-2">Manages collateral deposits and withdrawals</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold">Price Oracle</h4>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">0x9876...5432</code>
                        <p className="text-sm text-gray-600 mt-2">Provides real-time asset pricing</p>
                      </div>
                    </div>

                    <h3>Security Features</h3>
                    <ul>
                      <li>Multi-signature wallet for upgrades</li>
                      <li>Time-locked critical functions</li>
                      <li>Automated liquidation system</li>
                      <li>Emergency pause mechanism</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'api' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>⚡</span>
                    <span>API Reference</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>REST API Endpoints</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800">GET /api/loans</h4>
                        <p className="text-blue-600 text-sm">Retrieve all available loans</p>
                        <code className="block text-xs bg-blue-100 p-2 rounded mt-2">
                          curl -X GET https://api.flowlend.com/loans
                        </code>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800">POST /api/loans</h4>
                        <p className="text-green-600 text-sm">Create a new loan request</p>
                        <code className="block text-xs bg-green-100 p-2 rounded mt-2">
                          {`curl -X POST https://api.flowlend.com/loans -d '{"amount": 1000, "duration": 30}'`}
                        </code>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800">GET /api/user/:address</h4>
                        <p className="text-purple-600 text-sm">Get user portfolio data</p>
                        <code className="block text-xs bg-purple-100 p-2 rounded mt-2">
                          curl -X GET https://api.flowlend.com/user/0x123...
                        </code>
                      </div>
                    </div>

                    <h3>WebSocket Events</h3>
                    <ul>
                      <li><strong>loan_created:</strong> New loan request created</li>
                      <li><strong>loan_funded:</strong> Loan has been funded</li>
                      <li><strong>payment_made:</strong> Borrower made a payment</li>
                      <li><strong>liquidation_triggered:</strong> Position liquidated</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Security</span>
                  </h2>
                  
                  <div className="prose max-w-none">
                    <h3>Security Audits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800">✅ OpenZeppelin</h4>
                        <p className="text-green-600 text-sm">Smart contract security audit completed</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800">✅ Consensys Diligence</h4>
                        <p className="text-green-600 text-sm">Code review and security assessment</p>
                      </div>
                    </div>

                    <h3>Best Practices</h3>
                    <ul>
                      <li>Never share your private keys</li>
                      <li>Always verify contract addresses</li>
                      <li>Use hardware wallets for large amounts</li>
                      <li>Monitor your health factor regularly</li>
                      <li>Keep some ETH for gas fees</li>
                    </ul>

                    <h3>Bug Bounty Program</h3>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800">Rewards up to $50,000</h4>
                      <p className="text-orange-600 text-sm">Report security vulnerabilities and earn rewards</p>
                      <Link href="/contact" className="text-orange-700 underline">Contact us for details</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

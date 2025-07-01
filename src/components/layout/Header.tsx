'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useState } from 'react'
import { WalletConnection } from '../ui/WalletConnection'

export function Header() {
  const { isConnected, address } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">₿</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                FlowLend
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link href="/borrow" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200">
              Borrow
            </Link>
            <Link href="/lend" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200">
              Lend
            </Link>
            <Link href="/dashboard" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200">
              Dashboard
            </Link>
          </nav>
          
          {/* Desktop Wallet Connection */}
          <div className="hidden md:flex items-center space-x-4">
            {isConnected && (
              <div className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Connected</span>
              </div>
            )}
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <span className="hidden sm:block text-sm text-gray-600 font-mono">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button
                  onClick={() => disconnect()}
                  className="btn-secondary px-3 py-2 text-sm"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <WalletConnection className="btn-primary px-3 py-2 text-sm">
                Connect Wallet
              </WalletConnection>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {isConnected && (
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <Link 
              href="/borrow" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Borrow
            </Link>
            <Link 
              href="/lend" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lend
            </Link>
            <Link 
              href="/dashboard" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            
            {/* Mobile Wallet Connection */}
            <div className="pt-4 border-t border-gray-200">
              {isConnected ? (
                <div className="space-y-3">
                  <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Connected: {address?.slice(0, 8)}...{address?.slice(-6)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      disconnect()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full btn-secondary px-4 py-3 text-sm"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <div onClick={() => setMobileMenuOpen(false)}>
                  <WalletConnection className="w-full btn-primary px-4 py-3 text-sm">
                    Connect Wallet
                  </WalletConnection>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useConnect, useAccount } from 'wagmi'
import { injected, walletConnect } from 'wagmi/connectors'

interface WalletConnectionProps {
  className?: string
  children?: React.ReactNode
}

export function WalletConnection({ className = "btn-primary", children = "Connect Wallet" }: WalletConnectionProps) {
  const { connect, connectors } = useConnect()
  const { isConnected } = useAccount()
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileInstructions, setShowMobileInstructions] = useState(false)

  useEffect(() => {
    // Detect if user is on mobile device
    const checkMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    setIsMobile(checkMobile())
  }, [])

  const handleConnect = async () => {
    // Check if MetaMask or other wallet is available
    const hasWallet = typeof window !== 'undefined' && window.ethereum

    if (isMobile && !hasWallet) {
      // On mobile without wallet browser, show instructions
      setShowMobileInstructions(true)
      return
    }

    try {
      // Try injected first (MetaMask, etc.)
      if (hasWallet) {
        connect({ connector: injected() })
      } else {
        // Fallback to WalletConnect for mobile
        const walletConnectConnector = connectors.find(c => c.id === 'walletConnect')
        if (walletConnectConnector) {
          connect({ connector: walletConnectConnector })
        }
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error)
      if (isMobile) {
        setShowMobileInstructions(true)
      }
    }
  }

  if (isConnected) {
    return null
  }

  return (
    <>
      <button onClick={handleConnect} className={className}>
        {children}
      </button>

      {/* Mobile Instructions Modal */}
      {showMobileInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
              <button 
                onClick={() => setShowMobileInstructions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                To use FlowLend on mobile, you have several options:
              </div>
              
              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full text-xs flex items-center justify-center mr-2">1</span>
                    Use MetaMask Mobile Browser
                  </h4>
                  <p className="text-xs text-gray-600">
                    Open MetaMask app → tap "Browser" → navigate to this website
                  </p>
                </div>
                
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs flex items-center justify-center mr-2">2</span>
                    Use Trust Wallet Browser
                  </h4>
                  <p className="text-xs text-gray-600">
                    Open Trust Wallet → tap "Browser" → navigate to this website
                  </p>
                </div>
                
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-xs flex items-center justify-center mr-2">3</span>
                    Use WalletConnect
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    Connect via QR code with your mobile wallet
                  </p>
                  <button 
                    onClick={() => {
                      const walletConnectConnector = connectors.find(c => c.id === 'walletConnect')
                      if (walletConnectConnector) {
                        connect({ connector: walletConnectConnector })
                        setShowMobileInstructions(false)
                      }
                    }}
                    className="btn-primary text-xs w-full"
                  >
                    Try WalletConnect
                  </button>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-yellow-800">
                  <strong>Note:</strong> Safari and Chrome browsers on mobile don't support MetaMask extensions. 
                  You need to use a wallet browser or WalletConnect.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

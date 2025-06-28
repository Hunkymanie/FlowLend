'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useEffect, useState } from 'react'

export function WalletTest() {
  const { isConnected, address } = useAccount()
  const { connect, connectors, isPending, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [hasEthereum, setHasEthereum] = useState(false)

  useEffect(() => {
    // Check if ethereum object exists (MetaMask or other wallet)
    if (typeof window !== 'undefined') {
      setHasEthereum(!!window.ethereum)
    }
  }, [])

  console.log('WalletTest render:', { 
    isConnected, 
    address, 
    connectorsCount: connectors.length,
    connectors: connectors.map(c => ({ name: c.name, id: c.id })),
    isPending,
    error: error?.message,
    hasEthereum,
    windowEthereum: typeof window !== 'undefined' ? !!window.ethereum : 'unknown'
  })

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-yellow-50">
      <h3 className="font-bold mb-2">Wallet Connection Test</h3>
      
      <div className="text-sm mb-2">
        <p>Connected: {isConnected ? 'Yes' : 'No'}</p>
        <p>Address: {address || 'None'}</p>
        <p>Connectors: {connectors.length}</p>
        <p>Has Ethereum: {hasEthereum ? 'Yes' : 'No'}</p>
        <p>Pending: {isPending ? 'Yes' : 'No'}</p>
        {error && <p className="text-red-600">Error: {error.message}</p>}
      </div>

      {!hasEthereum && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-2 text-sm">
          No Web3 wallet detected. Please install MetaMask or another Ethereum wallet.
        </div>
      )}

      <div className="space-x-2">
        {!isConnected ? (
          connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => {
                console.log('Attempting to connect with:', connector.name)
                try {
                  connect({ connector })
                } catch (err) {
                  console.error('Connect error:', err)
                }
              }}
              disabled={isPending || !hasEthereum}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Connect {connector.name}
            </button>
          ))
        ) : (
          <button
            onClick={() => disconnect()}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  )
}

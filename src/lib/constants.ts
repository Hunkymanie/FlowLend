// Contract addresses for different networks
export const CONTRACT_ADDRESSES = {
  hardhat: {
    FlowLend: '0x5FbDB2315678afecb367f032d93F642f64180aa3', // Default Hardhat deployment address
  },
  localhost: {
    FlowLend: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  },
  sepolia: {
    FlowLend: '', // Add after deployment
  },
  mainnet: {
    FlowLend: '', // Add after deployment
  },
}

export const SUPPORTED_CHAINS = [1337, 11155111, 1] // Hardhat, Sepolia, Mainnet

export const CHAIN_NAMES = {
  1337: 'Hardhat',
  11155111: 'Sepolia',
  1: 'Mainnet',
}

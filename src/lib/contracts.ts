import { useReadContract, useWriteContract } from 'wagmi'
import { parseEther, formatEther } from 'viem'

// FlowLend contract ABI (simplified for demo)
const FLOWLEND_ABI = [
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'depositCollateral',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'withdrawCollateral',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'amount', type: 'uint256' }, { name: 'duration', type: 'uint256' }],
    name: 'requestLoan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'user', type: 'address' }],
    name: 'getCollateralBalance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'user', type: 'address' }],
    name: 'getUserLoans',
    outputs: [{ name: '', type: 'tuple[]' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const

// Contract address (will be set after deployment)
export const FLOWLEND_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_FLOWLEND_CONTRACT_ADDRESS as `0x${string}` || '0x'

export function useFlowLendContract() {
  const { writeContract } = useWriteContract()

  const depositCollateral = async (amount: string) => {
    return writeContract({
      address: FLOWLEND_CONTRACT_ADDRESS,
      abi: FLOWLEND_ABI,
      functionName: 'depositCollateral',
      args: [parseEther(amount)],
      value: parseEther(amount),
    })
  }

  const withdrawCollateral = async (amount: string) => {
    return writeContract({
      address: FLOWLEND_CONTRACT_ADDRESS,
      abi: FLOWLEND_ABI,
      functionName: 'withdrawCollateral',
      args: [parseEther(amount)],
    })
  }

  const requestLoan = async (amount: string, duration: number) => {
    return writeContract({
      address: FLOWLEND_CONTRACT_ADDRESS,
      abi: FLOWLEND_ABI,
      functionName: 'requestLoan',
      args: [parseEther(amount), BigInt(duration)],
    })
  }

  return {
    depositCollateral,
    withdrawCollateral,
    requestLoan,
  }
}

export function useCollateralBalance(userAddress: `0x${string}` | undefined) {
  return useReadContract({
    address: FLOWLEND_CONTRACT_ADDRESS,
    abi: FLOWLEND_ABI,
    functionName: 'getCollateralBalance',
    args: userAddress ? [userAddress] : undefined,
    query: {
      enabled: !!userAddress && !!FLOWLEND_CONTRACT_ADDRESS,
    },
  })
}

export function useUserLoans(userAddress: `0x${string}` | undefined) {
  return useReadContract({
    address: FLOWLEND_CONTRACT_ADDRESS,
    abi: FLOWLEND_ABI,
    functionName: 'getUserLoans',
    args: userAddress ? [userAddress] : undefined,
    query: {
      enabled: !!userAddress && !!FLOWLEND_CONTRACT_ADDRESS,
    },
  })
}

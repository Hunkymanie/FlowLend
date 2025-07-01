'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const categories = [
    { id: 'general', title: 'General', icon: '❓' },
    { id: 'borrowing', title: 'Borrowing', icon: '💰' },
    { id: 'lending', title: 'Lending', icon: '🏦' },
    { id: 'security', title: 'Security', icon: '🔒' },
    { id: 'technical', title: 'Technical', icon: '⚙️' }
  ]

  const faqs: FAQItem[] = [
    {
      id: 'what-is-flowlend',
      category: 'general',
      question: 'What is FlowLend?',
      answer: 'FlowLend is a decentralized lending platform built on Ethereum that connects borrowers and lenders directly. It eliminates intermediaries, reduces costs, and provides transparent, secure lending through smart contracts.'
    },
    {
      id: 'how-it-works',
      category: 'general',
      question: 'How does FlowLend work?',
      answer: 'FlowLend uses over-collateralized loans to ensure security. Borrowers deposit crypto assets as collateral (typically 150% of loan value), create loan requests, and get funded by lenders. All transactions are secured by smart contracts on the Ethereum blockchain.'
    },
    {
      id: 'supported-assets',
      category: 'general',
      question: 'What assets are supported?',
      answer: 'FlowLend supports major cryptocurrencies including ETH, WBTC, USDC, USDT, DAI, LINK, UNI, and AAVE. We continuously evaluate and add new assets based on liquidity, stability, and community demand.'
    },
    {
      id: 'fees',
      category: 'general',
      question: 'What fees does FlowLend charge?',
      answer: 'FlowLend charges a small protocol fee (typically 0.5-1%) on successful loans to maintain the platform. You will also pay Ethereum gas fees for transactions. There are no hidden fees - all costs are transparent and displayed before you confirm any transaction.'
    },
    {
      id: 'minimum-loan',
      category: 'borrowing',
      question: 'What is the minimum loan amount?',
      answer: 'The minimum loan amount is $100 USD equivalent. However, considering gas fees, we recommend loans of at least $500 to make economic sense. There is no maximum limit, but larger loans may take longer to get fully funded.'
    },
    {
      id: 'collateral-ratio',
      category: 'borrowing',
      question: 'What is the required collateral ratio?',
      answer: 'The minimum collateral ratio is 150%, meaning you need $1,500 in collateral to borrow $1,000. Higher ratios (200%+) typically result in better interest rates and reduce liquidation risk.'
    },
    {
      id: 'loan-duration',
      category: 'borrowing',
      question: 'How long can I borrow for?',
      answer: 'Loan durations range from 7 days to 365 days. Shorter loans typically have lower interest rates. You can also repay early without penalties and extend loans if both parties agree.'
    },
    {
      id: 'liquidation',
      category: 'borrowing',
      question: 'What happens if my collateral value drops?',
      answer: 'If your health factor drops below 1.1, your collateral may be liquidated to repay the loan. You will receive notifications when your health factor approaches dangerous levels. You can add more collateral or repay part of the loan to improve your position.'
    },
    {
      id: 'lending-returns',
      category: 'lending',
      question: 'What returns can I expect from lending?',
      answer: 'Typical returns range from 4-12% APY, depending on loan duration, collateral ratio, and market conditions. Higher-risk loans (lower collateral ratios) generally offer higher returns.'
    },
    {
      id: 'lending-risk',
      category: 'lending',
      question: 'What are the risks of lending?',
      answer: 'The main risk is smart contract risk, as all loans are over-collateralized. Other risks include temporary impermanent loss during volatile market conditions and potential delays in borrower repayments. Our liquidation system helps protect lender funds.'
    },
    {
      id: 'choose-loans',
      category: 'lending',
      question: 'How do I choose which loans to fund?',
      answer: 'Consider factors like collateral ratio (higher is safer), loan duration (shorter is typically safer), borrower history, and offered interest rate. Our platform provides risk ratings and detailed loan information to help you decide.'
    },
    {
      id: 'early-withdrawal',
      category: 'lending',
      question: 'Can I withdraw my funds early?',
      answer: 'Once you fund a loan, your funds are locked until the loan term ends or is repaid early. However, we are developing a secondary market feature that will allow you to sell your loan positions to other users.'
    },
    {
      id: 'wallet-security',
      category: 'security',
      question: 'How do I keep my wallet secure?',
      answer: 'Use hardware wallets for large amounts, never share your private keys, always verify contract addresses before interacting, keep your wallet software updated, and be cautious of phishing attempts. Enable 2FA where possible.'
    },
    {
      id: 'smart-contract-audit',
      category: 'security',
      question: 'Are the smart contracts audited?',
      answer: 'Yes, our smart contracts have been audited by OpenZeppelin and Consensys Diligence. We also have an ongoing bug bounty program with rewards up to $50,000 for security vulnerabilities. All audit reports are publicly available.'
    },
    {
      id: 'fund-safety',
      category: 'security',
      question: 'How safe are my funds?',
      answer: 'Funds are secured by audited smart contracts and over-collateralization. We use battle-tested code patterns, multi-signature wallets for upgrades, and have emergency pause mechanisms. However, DeFi always carries smart contract risk.'
    },
    {
      id: 'metamask-setup',
      category: 'technical',
      question: 'How do I set up MetaMask?',
      answer: 'Download MetaMask from metamask.io, create a new wallet, securely store your seed phrase, add Ethereum mainnet, and fund your wallet with ETH for gas fees. Always download from official sources only.'
    },
    {
      id: 'gas-fees',
      category: 'technical',
      question: 'Why are gas fees so high?',
      answer: 'Gas fees depend on Ethereum network congestion. You can reduce fees by transacting during low-traffic hours (typically weekends/evenings UTC) or using lower gas prices if you are not in a hurry. We are exploring Layer 2 solutions to reduce costs.'
    },
    {
      id: 'transaction-failed',
      category: 'technical',
      question: 'My transaction failed. What should I do?',
      answer: 'Common causes include insufficient gas, low gas price, or slippage. Check your wallet for error messages, ensure you have enough ETH for gas, try increasing gas limit, and retry the transaction. Contact support if issues persist.'
    },
    {
      id: 'mobile-access',
      category: 'technical',
      question: 'Can I use FlowLend on mobile?',
      answer: 'Yes! FlowLend is fully responsive and works on mobile browsers. You can use MetaMask mobile app, Trust Wallet, or other mobile Web3 browsers. The experience is optimized for both desktop and mobile use.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
              <p className="text-gray-600 mt-2">Find answers to common questions about FlowLend</p>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="card">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 card text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Support
            </Link>
            <Link href="/docs" className="btn-outline">
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

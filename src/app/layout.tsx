import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowLend - Decentralized Lending Platform',
  description: 'A modern decentralized lending platform built on Ethereum. Borrow and lend cryptocurrency with competitive rates and transparent terms.',
  keywords: ['DeFi', 'lending', 'borrowing', 'cryptocurrency', 'Ethereum', 'blockchain'],
  authors: [{ name: 'FlowLend Team' }],
  creator: 'FlowLend',
  publisher: 'FlowLend',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'FlowLend - Decentralized Lending Platform',
    description: 'A modern decentralized lending platform built on Ethereum',
    url: 'https://flowlend.app',
    siteName: 'FlowLend',
    images: [
      {
        url: '/apple-icon',
        width: 180,
        height: 180,
        alt: 'FlowLend Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FlowLend - Decentralized Lending Platform',
    description: 'A modern decentralized lending platform built on Ethereum',
    images: ['/apple-icon'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#059669',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'A One Movers - Professional Moving Services Across Canada',
  description: 'Reliable, affordable, and professional moving services across Canada. Trusted local and long-distance movers with excellent customer reviews.',
  keywords: 'moving company, movers Canada, local moving, long distance moving, professional movers',
  authors: [{ name: 'A One Movers' }],
  openGraph: {
    title: 'A One Movers - Professional Moving Services Across Canada',
    description: 'Reliable, affordable, and professional moving services across Canada.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

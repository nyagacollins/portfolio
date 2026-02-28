import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Collins Ndege - Full Stack Developer',
  description: 'Portfolio of Collins Ndege, a passionate full-stack developer specializing in modern web technologies.',
  keywords: 'developer, portfolio, react, nextjs, typescript, full-stack',
  authors: [{ name: 'Collins Ndege' }],
  openGraph: {
    title: 'Collins Ndege - Full Stack Developer',
    description: 'Portfolio of Collins Ndege, a passionate full-stack developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-dark-300 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
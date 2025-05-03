import type { Metadata } from 'next'
import { Figtree, Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
  display: 'swap',
})

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UI Project',
  description: 'A Home UI Project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.variable} ${figtree.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

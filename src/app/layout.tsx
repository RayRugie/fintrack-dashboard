import type { Metadata } from 'next'
import { Inter, Public_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})
const publicSans = Public_Sans({ 
  subsets: ['latin'],
  variable: '--font-public-sans'
})

export const metadata: Metadata = {
  title: 'FinTrack Dashboard',
  description: 'Modern financial dashboard for tracking your expenses and income',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${publicSans.variable}`}>
      <body className="font-public-sans">
        {children}
      </body>
    </html>
  );
}

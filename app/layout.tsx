import '@/app/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import SuspensedSidebar from '@/components/sidebar.server'

import Sidebar from '@/components/sidebar.client'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] max-w-8xl mx-auto rounded-lg">
          <Suspense fallback={<Sidebar />}>
            <SuspensedSidebar />
          </Suspense>
          <div className="bg-background border-l overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}

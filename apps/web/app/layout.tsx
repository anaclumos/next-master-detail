import '@/web/app/globals.css'
import { cn } from '@/web/lib/utils'
import { Suspense } from 'react'
import SuspensedMaster from '@/web/components/master.server'

import Master from '@/web/components/master.client'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background antialiased san-francisco')}>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] max-w-8xl mx-auto rounded-lg">
          <Suspense fallback={<Master mode="desktop" />}>
            <SuspensedMaster mode="desktop" />
          </Suspense>
          <div className="bg-background border-l overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}

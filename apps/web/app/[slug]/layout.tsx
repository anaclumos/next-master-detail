import { Suspense } from 'react'
import SuspendedDetail from '@/web/components/detail.server'
import Detail from '@/web/components/detail.client'
import Link from 'next/link'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string; member?: string }
}) {
  return (
    <>
      <div className="p-4 border-b overflow-x-auto">
        <nav className="flex pr-4">
          <Link href="/" className="font-bold md:hidden pr-4 text-2xl flex items-center">
            ←
          </Link>
          <Suspense fallback={<Detail groupName={params.slug} />}>
            <SuspendedDetail groupName={params.slug} />
          </Suspense>
        </nav>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 p-4">
            <div className="prose">
              <h2>{children}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

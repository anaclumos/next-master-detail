import { Suspense } from 'react'
import SuspendedTabView from '@/components/tabview.server'
import TabView from '@/components/tabview.client'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string; member?: string }
}) {
  return (
    <>
      <div className="p-2 md:p-4 border-b">
        <nav className="flex">
          <Suspense fallback={<TabView groupName={params.slug} />}>
            <SuspendedTabView groupName={params.slug} />
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

// app/[slug]/page.tsx
import { Suspense } from 'react'
import { Skeleton } from '@/web/components/ui/skeleton'
import { GroupContent } from '@/web/components/groupview.server'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto">
      <Suspense fallback={<GroupSkeleton />}>
        <GroupContent groupName={params.slug} />
      </Suspense>
    </div>
  )
}

function GroupSkeleton() {
  return (
    <>
      <Skeleton className="h-8 w-48 my-4" />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
    </>
  )
}

// app/[slug]/[member]/page.tsx
import { Suspense } from 'react'
import { Skeleton } from '@/web/components/ui/skeleton'
import { MemberContent } from '@/web/components/memberview.server'

export default function Page({ params }: { params: { slug: string; member: string } }) {
  return (
    <div className="mx-auto">
      <Suspense fallback={<MemberSkeleton />}>
        <MemberContent groupName={params.slug} memberName={params.member} />
      </Suspense>
    </div>
  )
}

function MemberSkeleton() {
  return (
    <>
      <Skeleton className="h-8 w-48 my-4" />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    </>
  )
}

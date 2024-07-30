'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/web/components/ui/tabs'
import { Skeleton } from '@/web/components/ui/skeleton'
import { slugify } from '@/web/lib/utils'
import type { Member } from '../types'

export default function Detail({ groupName, members }: { groupName: string; members?: Member[] }) {
  const segment = useSelectedLayoutSegment()

  if (!members) {
    return (
      <Tabs defaultValue={groupName}>
        <TabsList className="gap-2">
          {[...Array(5)].map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Skeleton key={i} className="h-6 w-16 px-4" />
          ))}
        </TabsList>
      </Tabs>
    )
  }

  return (

    <Tabs defaultValue={segment ?? 'home'}>
      <TabsList>
        <Link href={`/${groupName}`}>
          <TabsTrigger value="home">HOME</TabsTrigger>
        </Link>
        {members.map((m: Member) => (
          <Link href={`/${groupName}/${slugify(m.name)}`} key={m.name}>
            <TabsTrigger value={slugify(m.name)}>{m.name}</TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  )
}

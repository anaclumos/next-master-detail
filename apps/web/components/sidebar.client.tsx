'use client'
import { cn, slugify } from '@/web/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableRow } from '@/web/components/ui/table'
import { useState } from 'react'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/web/components/ui/dropdown-menu'
import { Button } from '@/web/components/ui/button'
import { Skeleton } from '@/web/components/ui/skeleton'

const countDaysSince = (str: string) => {
  const date = new Date(str)
  const today = new Date()
  const diff = today.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  return days
}

export default function Sidebar({
  groups,
}: {
  groups?: {
    name: string
    debut: string
    image: string
    count: number
  }[]
}) {
  const pathname = useSelectedLayoutSegment()
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  if (!groups)
    return (
      <div className="bg-background overflow-x-clip">
        <div className={'p-4 border-b'}>
          <Skeleton className="h-9 w-24" />
        </div>
        <div className={'gap-4 flex items-center justify-between border-b p-2 pl-4'}>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-9 w-9" />
        </div>
        <Table>
          <TableBody>
            {[...Array(9)].map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <TableRow key={i}>
                <TableCell className="p-0">
                  <div className="flex items-center gap-4 p-4 overflow-hidden max-w-full">
                    <Skeleton className="w-[40px] h-[40px] rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )

  const sortedGroups = [...groups].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    }
    if (sortBy === 'count') {
      return sortOrder === 'asc' ? a.count - b.count : b.count - a.count
    }
    if (sortBy === 'debut') {
      return sortOrder === 'asc' ? Number(a.debut) - Number(b.debut) : Number(b.debut) - Number(a.debut)
    }
    return 0
  })

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="bg-background overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold py-1">{sortedGroups.length} Groups</h2>
      </div>
      <div className="gap-4 flex items-center justify-between border-b p-2 pl-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground">
            {sortBy === 'name' ? 'Name' : sortBy === 'count' ? 'Count' : sortBy === 'debut' ? 'Debut' : ''}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenu>
              <DropdownMenuItem onClick={() => setSortBy('name')}>Name</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy('count')}>Count</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy('debut')}>Debut</DropdownMenuItem>
            </DropdownMenu>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={toggleSortOrder} variant="ghost" className="text-sm font-medium text-muted-foreground w-9 h-9">
          {sortOrder === 'asc' ? '↑' : '↓'}
        </Button>
      </div>
      <Table>
        <TableBody>
          {sortedGroups.map((group) => (
            <TableRow key={group.name}>
              <TableCell className="p-0">
                <Link
                  href={`/${slugify(group.name)}`}
                  className={cn(
                    'flex items-center gap-4 p-4 hover:bg-muted transition-colors',
                    pathname === slugify(group.name) && 'bg-muted'
                  )}
                >
                  <div className="relative w-[40px] h-[40px] flex-shrink-0">
                    <Image src={group.image} alt={group.name} fill className="rounded-md object-cover" />
                  </div>
                  <div>
                    <span className="font-medium">{group.name}</span>
                    {group.debut && countDaysSince(group.debut) > 30 && (
                      <div className="text-sm text-muted-foreground">
                        {group.count} ppl, {countDaysSince(group.debut).toLocaleString()} days.
                      </div>
                    )}
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

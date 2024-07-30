import { use } from 'react'
import Detail from '@/web/components/detail.client'

async function getMembers({ groupName }: { groupName: string }) {
  const res = await fetch(`http://localhost:5678/${groupName}/members`, {
    cache: 'no-store',
  })
  const members = await res.json()
  return members
}

export default function SuspendedDetail({ groupName }: { groupName: string }) {
  const members = use(getMembers({ groupName }))
  return <Detail groupName={groupName} members={members} />
}

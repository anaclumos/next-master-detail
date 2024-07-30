import { use } from 'react'
import TabView from '@/web/components/tabview.client'

async function getMembers({ groupName }: { groupName: string }) {
  const res = await fetch(`http://localhost:5678/${groupName}/members`, {
    cache: 'no-store',
  })
  const members = await res.json()
  return members
}

export default function SuspendedTabView({ groupName }: { groupName: string }) {
  const members = use(getMembers({ groupName }))
  return <TabView groupName={groupName} members={members} />
}

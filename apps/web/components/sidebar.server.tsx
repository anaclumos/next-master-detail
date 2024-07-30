import { use } from 'react'
import Sidebar from '@/web/components/sidebar.client'

const getGroups = async () => {
  const res = await fetch('http://localhost:5678/groups', {
    cache: 'no-store',
  })
  const groups = await res.json()
  return groups
}

export default function SuspensedSidebar() {
  const groups = use(getGroups())
  return <Sidebar groups={groups} />
}

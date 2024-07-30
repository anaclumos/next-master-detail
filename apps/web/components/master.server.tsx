import { use } from 'react'
import Master from '@/web/components/master.client'

const getGroups = async () => {
  const res = await fetch('http://localhost:5678/groups', {
    cache: 'no-store',
  })
  const groups = await res.json()
  return groups
}

export default function SuspensedMaster(
  { mode }: { mode: 'desktop' | 'mobile' } = { mode: 'desktop' }
) {
  const groups = use(getGroups())
  return <Master groups={groups} mode={mode} />
}

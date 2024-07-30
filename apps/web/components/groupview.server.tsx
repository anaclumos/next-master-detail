import { use } from 'react'
import type { Group } from '@/web/types'
import { CardView } from '@/web/components/cardview'

async function getGroup({ groupName }: { groupName: string }) {
  const res = await fetch(`http://localhost:5678/${groupName}`, {
    cache: 'no-store',
  })
  const group = await res.json()
  return group
}

export function GroupContent({ groupName }: { groupName: string }) {
  const group = use(getGroup({ groupName })) as Group

  return (
    <>
      <h1 className="text-3xl font-bold my-4 mx-1">{group.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <CardView title="Debut" value={new Date(group.debut).toLocaleDateString('ko-KR')} />
        <CardView title="Members" value={String(group.members.length)} />
        {group.image && <CardView value={group.name} image={group.image} />}
        <CardView title="Debut" value={new Date(group.debut).toLocaleDateString('ko-KR')} />
        <CardView title="Members" value={String(group.members.length)} />
        {group.image && <CardView value={group.name} image={group.image} />}
        <CardView title="Debut" value={new Date(group.debut).toLocaleDateString('ko-KR')} />
        <CardView title="Members" value={String(group.members.length)} />
        {group.image && <CardView value={group.name} image={group.image} />}
        <CardView title="Debut" value={new Date(group.debut).toLocaleDateString('ko-KR')} />
        <CardView title="Members" value={String(group.members.length)} />
        {group.image && <CardView value={group.name} image={group.image} />}
      </div>
    </>
  )
}

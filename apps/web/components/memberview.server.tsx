// app/[slug]/[member]/MemberContent.tsx
import { use } from 'react'
import type { Member } from '../types'
import { CardView } from '@/web/components/cardview'

async function getMember({ groupName, memberName }: { groupName: string; memberName: string }) {
  const res = await fetch(`http://localhost:5678/${groupName}/${memberName}`, {
    cache: 'no-store',
  })
  const member = await res.json()
  return member
}

export function MemberContent({ groupName, memberName }: { groupName: string; memberName: string }) {
  const member = use(getMember({ groupName, memberName })) as Member

  return (
    <>
      <h1 className="text-3xl font-bold my-4 mx-1">{member.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <CardView title="Birthday" value={new Date(member.birthday).toLocaleDateString('ko-KR')} />
        <CardView title="Country" value={member.country} />
        <CardView title="Profile" value={member.name} image={member.image} />
        <CardView title="Birthday" value={new Date(member.birthday).toLocaleDateString('ko-KR')} />
        <CardView title="Country" value={member.country} />
        <CardView title="Profile" value={member.name} image={member.image} />
        <CardView title="Birthday" value={new Date(member.birthday).toLocaleDateString('ko-KR')} />
        <CardView title="Country" value={member.country} />
        <CardView title="Profile" value={member.name} image={member.image} />
        <CardView title="Birthday" value={new Date(member.birthday).toLocaleDateString('ko-KR')} />
        <CardView title="Country" value={member.country} />
        <CardView title="Profile" value={member.name} image={member.image} />
      </div>
    </>
  )
}

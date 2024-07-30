import Image from 'next/image'
import { Suspense } from 'react'
import Master from '../components/master.client'
import SuspensedMaster from '../components/master.server'

export default function Page() {
  return (
    <>
      <div className="hidden md:flex items-center justify-center h-screen w-full bg-background">
        <div className="flex justify-center">
          <Image src="/bokjumeoni.svg" alt="bokjumeoni" width={100} height={24} priority />
        </div>
      </div>
      <Suspense fallback={<Master mode="mobile" />}>
        <SuspensedMaster mode="mobile" />
      </Suspense>
    </>
  )
}

import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex items-center justify-center p-24 bg-background">
      <Image src="/favicon.ico" alt="Next.js Logo" className="dark:invert" width={100} height={24} priority />
    </div>
  )
}

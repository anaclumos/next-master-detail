import { Card } from '@/web/components/ui/card'
import Image from 'next/image'

type CardViewProps = {
  title?: string
  value?: string
  image?: string
}

export function CardView({ title, value, image }: CardViewProps) {
  return (
    <>
      {image ? (
        <Card>
          <div className="relative aspect-square w-full">
            <Image src={image} alt={title ?? value ?? ''} fill className="rounded-md object-cover" />
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
          {value && <p className="text-2xl font-bold text-wrap whitespace-pre-wrap">{value}</p>}
        </Card>
      )}
    </>
  )
}

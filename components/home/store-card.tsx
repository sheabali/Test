import type { Store } from "@/types/home.types"
import Image from "next/image"
import Link from "next/link"

interface StoreCardProps {
  store: Store
}

export function StoreCard({ store }: StoreCardProps) {
  return (
    <Link href={store.href} className="block group">
      <div className="bg-white rounded-xl overflow-hidden transition-shadow p-4 flex flex-col items-center gap-3">
        {/* Store Logo - Rectangular Rounded */}
        <div className="w-full aspect-video rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
          <Image
            src={store.logo || "/placeholder.svg"}
            alt={store.name}
            width={200}
            height={120}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Store Name */}
        <span className="text-sm md:text-base font-medium text-center text-gray-900">{store.name}</span>
      </div>
    </Link>
  )
}

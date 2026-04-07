import type { OfferBadge } from "@/types/home.types"
import Image from "next/image"
import Link from "next/link"

interface OfferBadgeCardProps {
  offer: OfferBadge
}

export function OfferBadgeCard({ offer }: OfferBadgeCardProps) {
  return (
    <Link href={offer.href} className="flex flex-col items-center gap-3 group shrink-0 p-4 rounded-xl bg-white hover:bg-red-50 transition-colors">
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
        <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
      </div>
      <span className="text-sm md:text-base font-medium text-center max-w-25 line-clamp-1">{offer.title}</span>
    </Link>
  )
}

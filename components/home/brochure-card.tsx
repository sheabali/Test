import type { Brochure } from "@/types/home.types"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BrochureCardProps {
  brochure: Brochure
}

export function BrochureCard({ brochure }: BrochureCardProps) {
  return (
    <Link
      href={brochure.href}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
        <Image
          src={brochure.image || "/placeholder.svg"}
          alt={brochure.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent" >
          <div className="flex items-center gap-2 p-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text">
              A
            </div>
            <span className="text-white font-medium">
              {brochure.storeName}
            </span>
          </div>

        </div>
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{brochure.title}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground pt-2">
          <Calendar className="h-3 w-3" />
          <span>
            {brochure.startDate} - {brochure.endDate}
          </span>
        </div>
      </div>
    </Link>
  )
}

"use client"

import icon1 from "@/assets/icons/category1.svg"
import { Button } from "@/components/ui/button"
import type { Category } from "@/types/home.types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const categories: Category[] = [
  { id: "1", name: "Home Appliances", icon: "🏠" },
  { id: "2", name: "Electronics", icon: "📱" },
  { id: "3", name: "Fashion", icon: "👗" },
  { id: "4", name: "Beauty", icon: "💄" },
  { id: "5", name: "Grocery", icon: "🛒" },
  { id: "6", name: "Sports", icon: "⚽" },
  { id: "7", name: "Toys", icon: "🧸" },
  { id: "8", name: "Books", icon: "📚" },
  { id: "9", name: "Furniture", icon: "🛋️" },
  { id: "10", name: "Garden", icon: "🌱" },
  { id: "10", name: "Garden", icon: "🌱" },
  { id: "10", name: "Garden", icon: "🌱" },
  { id: "10", name: "Garden", icon: "🌱" },
  { id: "10", name: "Garden", icon: "🌱" },
  { id: "10", name: "Garden", icon: "🌱" },
  { id: "10", name: "Garden", icon: "🌱" },
]

export function CategorySlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#EEE5E5] hover:bg-red-200 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Categories */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => router.push('/category/shop-by-category')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors shrink-0"
          >
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#EEE5E5]">
              <Image src={icon1} alt={category.name} width={24} height={24} />
            </div>
            <span className="text-sm font-medium text-foreground">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#EEE5E5] hover:bg-red-200 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

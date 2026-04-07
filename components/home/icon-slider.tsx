"use client"

import { Button } from "@/components/ui/button"
import type { IconSliderItem } from "@/types/home.types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const iconItems: IconSliderItem[] = [
  { id: "1", icon: "/grocery-icon.png", label: "Grocery", href: "/category/grocery" },
  { id: "2", icon: "/fashion-icon.png", label: "Fashion", href: "/category/fashion" },
  { id: "3", icon: "/electronics-icon.png", label: "Electronics", href: "/category/electronics" },
  { id: "4", icon: "/beauty-icon.png", label: "Beauty", href: "/category/beauty" },
  { id: "5", icon: "/home-icon.png", label: "Home", href: "/category/home" },
  { id: "6", icon: "/sports-icon.png", label: "Sports", href: "/category/sports" },
  { id: "7", icon: "/toys-icon.png", label: "Toys", href: "/category/toys" },
  { id: "8", icon: "/books-icon.png", label: "Books", href: "/category/books" },
  { id: "9", icon: "/furniture-icon.png", label: "Furniture", href: "/category/furniture" },
  { id: "10", icon: "/garden-icon.png", label: "Garden", href: "/category/garden" },
  { id: "11", icon: "/grocery-icon.png", label: "Grocery", href: "/category/grocery" },
  { id: "12", icon: "/fashion-icon.png", label: "Fashion", href: "/category/fashion" },
  { id: "13", icon: "/electronics-icon.png", label: "Electronics", href: "/category/electronics" },
  { id: "14", icon: "/beauty-icon.png", label: "Beauty", href: "/category/beauty" },
  { id: "15", icon: "/home-icon.png", label: "Home", href: "/category/home" },
  { id: "16", icon: "/sports-icon.png", label: "Sports", href: "/category/sports" },
  { id: "17", icon: "/toys-icon.png", label: "Toys", href: "/category/toys" },
  { id: "18", icon: "/books-icon.png", label: "Books", href: "/category/books" },
  { id: "19", icon: "/furniture-icon.png", label: "Furniture", href: "/category/furniture" },
  { id: "20", icon: "/garden-icon.png", label: "Garden", href: "/category/garden" },
]

export function IconSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 320
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative group w-full">
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

      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {iconItems.map((item) => (
          <Link key={item.id} href={item.href} className="flex flex-col items-center gap-2 shrink-0 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-[#EAACAB] flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src={item.icon || "/placeholder.svg"}
                alt={item.label}
                width={60}
                height={60}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-center max-w-20 line-clamp-2">{item.label}</span>
          </Link>
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

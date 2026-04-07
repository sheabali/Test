"use client"

import type React from "react"

import applePlayStoreBadge from "@/assets/applePlayStore.svg"
import playStoreBadge from "@/assets/playStore.svg"
import { CategorySlider } from "@/components/home/category-slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search:", searchQuery)
    // Implement search logic
  }

  return (
    <nav className="">
      {/* Sticky Top Bar */}
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-[#F9F9FF] transition-shadow duration-200 ${isScrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "shadow-none"
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between pt-3 md:pt-4 flex-wrap">
          <div className="flex gap-2 items-center">
            {/* Logo and Tagline */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/logo.svg" alt="Catalogi" width={150} height={50} className="h-12 w-auto md:h-14" priority />
            </Link>

            {/* Tagline - Hidden on mobile */}
            <p className="hidden lg:block text-sm text-muted-foreground text-center mx-4 wrap-break-word">
              All Turkish catalogs & offers in one place. Start saving today!
            </p>
          </div>

          {/* App Buttons */}
          <div className="flex items-center gap-2">
            <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="">
              <Image
                src={playStoreBadge}
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="">
              <Image
                src={applePlayStoreBadge}
                alt="Download on App Store"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 sm:pt-20 lg:pt-18">
        {/* Category Slider */}
        <CategorySlider />

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="py-4">
          <div className="flex">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Search by Store or Products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-4 h-11 md:h-12 text-base rounded-r-none"
              />
            </div>
            <Button type="submit" className="bg-[#9A1C1A] hover:bg-[#9A1C1A]/90 text-white px-6 md:px-8 h-11 md:h-12 rounded-l-none cursor-pointer">
              <Search className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Search</span>
            </Button>
          </div>
        </form>
      </div>
    </nav>
  )
}

"use client"

import { BrochureCard } from "@/components/home/brochure-card"
import { StoreCard } from "@/components/home/store-card"
import { currentBrochures, topStores } from "@/data/demo.data"
import type { Brochure, Store } from "@/types/home.types"
import { ChevronLeft } from "lucide-react"

// Demo stores - Home & Garden
const homeGardenStores: Store[] = [
    {
        id: "1",
        name: "Garden Center",
        logo: "/store-logo-1.svg",
        href: "/store/garden-center",
    },
    {
        id: "2",
        name: "Home Depot",
        logo: "/store-logo-2.svg",
        href: "/store/home-depot",
    },
    {
        id: "3",
        name: "Ikea",
        logo: "/store-logo-3.svg",
        href: "/store/ikea",
    },
    {
        id: "4",
        name: "Wayfair",
        logo: "/store-logo-4.svg",
        href: "/store/wayfair",
    },
]

// Demo brochures
const brochures: Brochure[] = [
    {
        id: "1",
        title: "Summer Collection",
        storeName: "Albertsons",
        image: "/brochure-1.jpg",
        startDate: "Nov 28, 2025",
        endDate: "Dec 2, 2025",
        href: "/brochure/1",
    },
    {
        id: "2",
        title: "Winter Sale",
        storeName: "Safeway",
        image: "/brochure-2.jpg",
        startDate: "Nov 25, 2025",
        endDate: "Dec 5, 2025",
        href: "/brochure/2",
    },
    {
        id: "3",
        title: "Holiday Deals",
        storeName: "Whole Foods",
        image: "/brochure-3.jpg",
        startDate: "Nov 20, 2025",
        endDate: "Dec 10, 2025",
        href: "/brochure/3",
    },
    {
        id: "4",
        title: "Mega Discounts",
        storeName: "Trader Joe's",
        image: "/brochure-4.jpg",
        startDate: "Nov 22, 2025",
        endDate: "Dec 3, 2025",
        href: "/brochure/4",
    },
    {
        id: "5",
        title: "Special Offers",
        storeName: "Kroger",
        image: "/brochure-5.jpg",
        startDate: "Nov 18, 2025",
        endDate: "Dec 8, 2025",
        href: "/brochure/5",
    },
    {
        id: "6",
        title: "Flash Sale",
        storeName: "Target",
        image: "/brochure-6.jpg",
        startDate: "Nov 30, 2025",
        endDate: "Dec 7, 2025",
        href: "/brochure/6",
    },
]

export default function ShopPage() {
    return (
        <main className="">
            {/* Container */}
            <div className="container mx-auto px-4 py-8">
                {/* Home & Garden Stores Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-medium flex items-center">
                            <ChevronLeft className="inline-block mr-2 text-primary" />
                            Home & Garden
                        </h1>
                    </div>

                    {/* Stores Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                        {topStores.map((store) => (
                            <StoreCard key={store.id} store={store} />
                        ))}
                    </div>
                </div>

                {/* Current Brochures Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-5">Current Brochures</h2>

                    {/* Brochures Grid - 2 columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {currentBrochures.map((brochure) => (
                            <BrochureCard key={brochure.id} brochure={brochure} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

import { AppDownloadBanner } from "@/components/home/app-download-banner"
import { BrochureCard } from "@/components/home/brochure-card"
import { IconSlider } from "@/components/home/icon-slider"
import { OfferBadgeCard } from "@/components/home/offer-badge"
import { StoreCard } from "@/components/home/store-card"
import { Button } from "@/components/ui/button"
import { currentBrochures, popularOffers, topStores } from "@/data/demo.data"
import { RefreshCcw } from "lucide-react"



export default function HomePage() {
    return (

        <>
            {/* Icon Slider */}
            <section className="py-2">
                <div className="container mx-auto px-4">
                    <IconSlider />
                </div>
            </section>

            {/* Popular Offer */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">Popular Offer</h2>
                    <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4">
                        {popularOffers.map((offer) => (
                            <OfferBadgeCard key={offer.id} offer={offer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Brochures */}
            <section className="">
                <div className="container mx-auto px-4">
                    <div className="mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl font-medium mb-2">Current Brochures</h2>
                        <p className="text-sm md:text-base text-muted-foreground">
                            We pick the latest and most popular offers for you!
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {currentBrochures.map((brochure) => (
                            <BrochureCard key={brochure.id} brochure={brochure} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 md:mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-[#9A1C1A] hover:bg-[#9A1C1A]/90 text-white border-0 px-8 md:px-12 cursor-pointer hover:text-white"
                        >
                            LOAD MORE <RefreshCcw className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Top Stores */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">Top Stores</h2>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                        {topStores.map((store) => (
                            <StoreCard key={store.id} store={store} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 md:mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary text-primary hover:bg-[#FFF5F5] px-8 md:px-12 bg-transparent cursor-pointer"
                        >
                            View All Store
                        </Button>
                    </div>
                </div>
            </section>

            {/* App Download Banner */}
            <AppDownloadBanner />
        </>
    )
}

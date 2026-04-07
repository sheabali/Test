import applePlayStoreBadge from "@/assets/applePlayStore.svg"
import bgOverlay from "@/assets/dawnloadSectionBg.png"
import phoneLayout from "@/assets/phoneLayout.webp"
import playStoreBadge from "@/assets/playStore.svg"
import Image from "next/image"
import Link from "next/link"

export function AppDownloadBanner() {
  return (
    <section className="relative overflow-hidden pt-5 pb-16">
      {/* Rounded red background with subtle pattern */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="relative rounded-3xl">
          {/* Pattern overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src={bgOverlay}
              alt="Pattern Overlay"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="relative grid md:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-8 py-5">
            {/* Phone Mockups (angled like reference) */}
            <div className="relative h-64 md:h-96 flex items-center justify-center">
              <Image
                src={phoneLayout}
                alt="App Preview"
                width={256}
                height={512}
                className="w-full h-full object-cover scale-125"
              />
            </div>

            {/* Content */}
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">
                Download Our App for Instant Access
              </h2>
              <p className="text-sm md:text-lg mb-6 md:mb-8 text-white/90 text-pretty">
                All your catalogs and promotions, right in your pocket.
              </p>

              {/* App Store Buttons (black badges) */}
              <div className="flex sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Image src={applePlayStoreBadge} alt="Download on App Store" width={150} height={50} className="h-12 w-auto" />
                </Link>
                <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Image src={playStoreBadge} alt="Get it on Google Play" width={150} height={50} className="h-12 w-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

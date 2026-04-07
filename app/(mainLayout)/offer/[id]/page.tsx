import { BrochureCard } from "@/components/home/brochure-card";
import { currentBrochures } from "@/data/demo.data";
import { ChevronLeft } from "lucide-react";

const OfferDetailsPage = () => {
    return (
        <main className="">
            {/* Container */}
            <div className="container mx-auto px-4 py-8">
                {/* Home & Garden Stores Section */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl font-medium flex items-center">
                        <ChevronLeft className="inline-block mr-2 text-primary" />
                        Cristmas Offer
                    </h1>
                </div>

                {/* Current Brochures Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-5">Latest broachers</h2>

                    {/* Brochures Grid - 2 columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {currentBrochures.map((brochure) => (
                            <BrochureCard key={brochure.id} brochure={brochure} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OfferDetailsPage;
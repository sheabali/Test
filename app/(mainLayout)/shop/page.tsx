import { StoreCard } from "@/components/home/store-card";
import { topStores } from "@/data/demo.data";

const AllStoresPage = () => {
    return (
        <main className="">
            {/* Container */}
            <div className="container mx-auto px-4 py-8">
                {/* Home & Garden Stores Section */}

                <h2 className="text-2xl md:text-3xl font-medium mb-5">All Stores</h2>
                {/* Stores Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                    {topStores.map((store) => (
                        <StoreCard key={store.id} store={store} />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default AllStoresPage;
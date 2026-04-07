

import routeIcon from "@/assets/icons/route.svg";
import websiteIcon from "@/assets/icons/website.svg";
import { BrochureCard } from "@/components/home/brochure-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currentBrochures } from "@/data/demo.data";
import { ChevronDown, Globe, MapPin, Phone } from "lucide-react";
import Image from "next/image";

interface ShopLocation {
    id: string;
    name: string;
    branch: string;
    address: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
}

const shopLocations: ShopLocation[] = [
    {
        id: "1",
        name: "Happy mart",
        branch: "Bali RD",
        address: "Sky View Atria, 100/15 Elevien Bali RD",
        isOpen: true,
        openTime: "9 AM Sat",
        closeTime: "10 PM",
    },
    {
        id: "2",
        name: "Happy mart",
        branch: "Mirpur 02",
        address: "Plot 4, R5, Mirpur 02",
        isOpen: true,
        openTime: "9 AM Sat",
        closeTime: "10 PM",
    },
    {
        id: "3",
        name: "Happy mart",
        branch: "",
        address: "41 Shah Mokhdum RD",
        isOpen: false,
        openTime: "9 AM Sat",
        closeTime: "10 PM",
    },
    {
        id: "4",
        name: "Happy mart",
        branch: "Gulshan Branch",
        address: "Suit 78, 02 Mirpur, Rd 14",
        isOpen: true,
        openTime: "9 AM Sat",
        closeTime: "10 PM",
    },
    {
        id: "5",
        name: "Happy mart",
        branch: "1 Rilnapul",
        address: "Suit 78, 02 Mirpur, Rd 14",
        isOpen: true,
        openTime: "9 AM Sat",
        closeTime: "10 PM",
    },
    {
        id: "6",
        name: "Happy mart",
        branch: "",
        address: "Mirpur 11",
        isOpen: false,
        openTime: "9 AM Sat",
        closeTime: "10 PM",
    },
];

const BranchDetailsPage = () => {

    return (
        <div className="">

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-medium mb-3">Happy Mart</h2>

                <div className="pb-8 lg:pb-10">
                    <p className="text-xl font-medium text-gray-700">Happy mart - Baki RD</p>
                    <p className="text-gray-500">Sky View Afrina, 389/B Shahid Baki RD</p>
                </div>

                <Tabs defaultValue="brochures" className="w-full">
                    <TabsList className="w-full justify-center bg-transparent border-b border-border rounded-none h-auto p-0 mb-6">
                        <TabsTrigger
                            value="brochures"
                            className="px-8 py-3 border-0 text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none shadow-none bg-transparent"
                        >
                            Brochures
                        </TabsTrigger>
                        <TabsTrigger
                            value="information"
                            className="px-8 py-3 border-0 text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none shadow-none bg-transparent"
                        >
                            Information
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="brochures" className="mt-0">
                        <div className="space-y-0">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                                {currentBrochures.map((brochure) => (
                                    <BrochureCard key={brochure.id} brochure={brochure} />
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="information" className="mt-0">
                        <div className="space-y-6">
                            {/* Route and Website Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex flex-col items-center justify-center gap-2 p-6 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src={routeIcon} alt="Route Icon" className="w-12 h-12 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-primary">Route</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-6 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src={websiteIcon} alt="Website Icon" className="w-12 h-12 text-red-600" />
                                    </div>
                                    <span className="text-sm font-medium text-primary">Website</span>
                                </button>
                            </div>

                            {/* Information Card */}
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                {/* Open Status */}
                                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                                            Open
                                        </Badge>
                                        <span className="text-sm text-gray-600">• Closes 10 PM</span>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                </div>

                                {/* Address */}
                                <div className="p-4 border-b border-gray-200 flex gap-3">
                                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Sky View Atrina, 389/B Shahid Baki RD</span>
                                </div>

                                {/* Website */}
                                <div className="p-4 border-b border-gray-200 flex gap-3">
                                    <Globe className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <a href="https://shwapno.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                        shwapno.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="p-4 flex gap-3">
                                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <a href="tel:+8801313049002" className="text-sm text-blue-600 hover:underline">
                                        +8801313049002
                                    </a>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Shwapno - North Banasree is a retail outlet located in the bustling area of Rampura, Dhaka. It offers a convenient shopping experience for local residents and visitors.
                                </p>
                            </div>
                        </div>
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    );
};

export default BranchDetailsPage;
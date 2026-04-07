
import { BrochureCard } from "@/components/home/brochure-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currentBrochures } from "@/data/demo.data";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

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

const ShopDetail = () => {

    return (
        <div className="">

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-medium mb-5">Happy Mart</h2>

                <Tabs defaultValue="brochures" className="w-full">
                    <TabsList className="w-full justify-center bg-transparent border-b border-border rounded-none h-auto p-0 mb-6">
                        <TabsTrigger
                            value="brochures"
                            className="px-8 py-3 border-0 text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none shadow-none bg-transparent"
                        >
                            Brochures
                        </TabsTrigger>
                        <TabsTrigger
                            value="shops"
                            className="px-8 py-3 border-0 text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none shadow-none bg-transparent"
                        >
                            Shops
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

                    <TabsContent value="shops" className="mt-0">
                        <div className="space-y-0">
                            {shopLocations.map((location) => (
                                <Link key={location.id} href={`/shop/mart/1`}>
                                    <div
                                        key={location.id}
                                        className="flex items-start gap-4 py-4 border-b border-border last:border-b-0"
                                    >
                                        {/* Shop Logo */}
                                        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                                            <div className="text-white text-center leading-tight">
                                                <div className="text-[10px] font-bold">happy</div>
                                                <div className="text-[10px] font-bold">mart</div>
                                            </div>
                                        </div>

                                        {/* Shop Details */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-foreground">
                                                {location.name}{location.branch ? ` - ${location.branch}` : ""}
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {location.address}
                                            </p>

                                            <div className="flex items-center gap-3 mt-2">
                                                <Badge
                                                    variant={location.isOpen ? "default" : "destructive"}
                                                    className={`text-[10px] px-2 py-0.5 ${location.isOpen
                                                        ? "bg-green-500 hover:bg-green-600"
                                                        : "bg-red-500 hover:bg-red-600"
                                                        }`}
                                                >
                                                    {location.isOpen ? "Open" : "Closed"}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    Opens {location.openTime}
                                                </span>
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    Closes {location.closeTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    );
};

export default ShopDetail;

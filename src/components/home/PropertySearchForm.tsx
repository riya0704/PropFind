"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, MapPin, Search } from "lucide-react"
import { Input } from "../ui/input"

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
)

export function PropertySearchForm() {
    return (
        <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl w-full relative border">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative w-full md:flex-grow">
                    <Input placeholder="Search Location..." className="h-14 pl-12 text-base border-gray-200 focus-visible:ring-1 focus-visible:ring-primary w-full" />
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                </div>
                <Button size="icon" className="h-14 w-14 shrink-0">
                    <Search className="h-6 w-6" />
                </Button>
                 <Button variant="outline" className="h-14 rounded-full text-primary border-primary hover:bg-primary hover:text-white px-6 shrink-0">
                    List Your Property
                 </Button>
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                <Select defaultValue="rent">
                    <SelectTrigger className="w-full md:w-auto h-14 text-base border-gray-200 focus:ring-1 focus:ring-primary rounded-xl">
                        <SelectValue placeholder="For Rent" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buy">For Buying</SelectItem>
                        <SelectItem value="rent">For Rent</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="house">
                    <SelectTrigger className="w-full md:w-auto h-14 text-base border-gray-200 focus:ring-1 focus:ring-primary rounded-xl">
                         <SelectValue placeholder="House" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="indonesia">
                    <SelectTrigger className="w-full md:w-auto h-14 text-base border-gray-200 focus:ring-1 focus:ring-primary rounded-xl">
                        <SelectValue placeholder="Indonesia" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                    </SelectContent>
                </Select>
                <Button size="lg" className="w-full md:w-auto md:flex-grow h-14 text-base rounded-full">Find Property</Button>
            </div>
        </div>
    )
}

"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, MapPin, Search } from "lucide-react"
import { Input } from "../ui/input"
import HomeIcon from "../icons/HomeIcon"

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
)

const ArrowRightLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17-5-5 5-5" />
        <path d="m18 17-5-5 5-5" />
    </svg>
)


export function PropertySearchForm() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full relative">
             <Button variant="outline" className="absolute top-6 right-6 bg-white rounded-full text-primary border-primary hover:bg-primary hover:text-white">List Your Property</Button>
            <div className="relative mb-4">
                <Input placeholder="Search Location..." className="h-14 pl-12 text-base border-gray-200 focus-visible:ring-1 focus-visible:ring-primary" />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Select defaultValue="rent">
                    <SelectTrigger className="w-full h-14 text-base border-gray-200 focus:ring-1 focus:ring-primary rounded-xl">
                        <div className="flex items-center gap-3">
                            <ArrowRightLeftIcon className="w-5 h-5 -rotate-45 text-primary" />
                            <SelectValue />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buy">For Buying</SelectItem>
                        <SelectItem value="rent">For Rent</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="house">
                    <SelectTrigger className="w-full h-14 text-base border-gray-200 focus:ring-1 focus:ring-primary rounded-xl">
                        <div className="flex items-center gap-3">
                            <Home className="w-5 h-5 text-primary" />
                            <SelectValue />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="indonesia">
                    <SelectTrigger className="w-full h-14 text-base border-gray-200 focus:ring-1 focus:ring-primary rounded-xl">
                        <div className="flex items-center gap-3">
                            <GlobeIcon className="w-5 h-5 text-primary" />
                            <SelectValue />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                    </SelectContent>
                </Select>
                <Button size="lg" className="w-full h-14 text-base rounded-xl">Find Property</Button>
            </div>
        </div>
    )
}

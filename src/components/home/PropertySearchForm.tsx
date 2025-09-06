"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Edit, Home, MapPin, Search } from "lucide-react"

export function PropertySearchForm() {
    return (
        <div className="bg-background/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto border">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4">
                <div className="relative w-full">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search Location..." className="w-full h-14 pl-12 pr-4 sm:pr-20 text-base rounded-full border-0 focus-visible:ring-0" />
                    <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
                <Button size="lg" variant="outline" className="h-14 text-base rounded-full bg-white hover:bg-neutral-100 whitespace-nowrap w-full lg:w-auto">
                    List Your Property
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 w-full">
                <Select defaultValue="rent">
                    <SelectTrigger className="w-full h-14 text-base rounded-full border-0 focus:ring-0">
                         <div className="flex items-center gap-2">
                            <Edit className="h-5 w-5 text-muted-foreground" />
                            <SelectValue placeholder="For Rent" />
                         </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buy">For Buying</SelectItem>
                        <SelectItem value="rent">For Rent</SelectItem>
                    </SelectContent>
                </Select>
                
                <Select defaultValue="house">
                    <SelectTrigger className="w-full h-14 text-base rounded-full border-0 focus:ring-0">
                         <div className="flex items-center gap-2">
                             <Home className="h-5 w-5 text-muted-foreground" />
                            <SelectValue placeholder="House" />
                         </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                </Select>
                
                <Select defaultValue="indonesia">
                    <SelectTrigger className="w-full h-14 text-base rounded-full border-0 focus:ring-0">
                         <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-muted-foreground" />
                            <SelectValue placeholder="Indonesia" />
                         </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                    </SelectContent>
                </Select>

                <Button size="lg" className="w-full h-14 text-base rounded-full bg-primary hover:bg-primary/90">
                    Find Property
                </Button>
            </div>
        </div>
    )
}

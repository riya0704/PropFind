"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Home, MapPin } from "lucide-react"

export function PropertySearchForm() {
    return (
        <div className="bg-background p-4 rounded-full shadow-2xl w-full max-w-5xl border">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="w-full md:w-1/4">
                    <Select defaultValue="buy">
                        <SelectTrigger className="w-full h-14 text-base rounded-full border-gray-200 focus:ring-primary">
                             <div className="flex items-center gap-2">
                                <Edit className="h-5 w-5 text-muted-foreground" />
                                <SelectValue placeholder="For Buying" />
                             </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="buy">For Buying</SelectItem>
                            <SelectItem value="rent">For Rent</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div className="w-full md:w-1/4">
                    <Select defaultValue="house">
                        <SelectTrigger className="w-full h-14 text-base rounded-full border-gray-200 focus:ring-primary">
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
                </div>
                
                <div className="w-full md:w-1/4">
                    <Select defaultValue="indonesia">
                        <SelectTrigger className="w-full h-14 text-base rounded-full border-gray-200 focus:ring-primary">
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
                </div>

                <Button size="lg" className="w-full md:w-1/4 h-14 text-base rounded-full bg-[#1E3A8A] hover:bg-blue-800 px-10">
                    Find Property
                </Button>
            </div>
        </div>
    )
}

"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Home, MapPin } from "lucide-react"

export function BuySearchForm() {
    return (
        <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg w-full max-w-4xl mx-auto border">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 w-full">
                <Select defaultValue="buy">
                    <SelectTrigger className="w-full h-14 text-base rounded-full bg-white border-gray-200 focus:ring-primary">
                         <div className="flex items-center gap-2 pl-2">
                            <Edit className="h-5 w-5 text-muted-foreground" />
                            <SelectValue placeholder="For Buying" />
                         </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buy">For Buying</SelectItem>
                        <SelectItem value="rent">For Rent</SelectItem>
                    </SelectContent>
                </Select>
                
                <Select defaultValue="house">
                    <SelectTrigger className="w-full h-14 text-base rounded-full bg-white border-gray-200 focus:ring-primary">
                         <div className="flex items-center gap-2 pl-2">
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
                    <SelectTrigger className="w-full h-14 text-base rounded-full bg-white border-gray-200 focus:ring-primary">
                         <div className="flex items-center gap-2 pl-2">
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

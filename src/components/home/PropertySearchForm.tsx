"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Home, MapPin } from "lucide-react"

export function PropertySearchForm() {
    return (
        <div className="bg-background p-4 rounded-full shadow-lg w-full max-w-5xl mx-auto border">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 w-full">
                <Select defaultValue="buy">
                    <SelectTrigger className="w-full h-14 text-base rounded-full border-0 focus:ring-0">
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

                <Button size="lg" className="w-full h-14 text-base rounded-full bg-primary hover:bg-primary/90 px-10">
                    Find Property
                </Button>
            </div>
        </div>
    )
}

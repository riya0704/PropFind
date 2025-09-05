"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, MapPin, SquarePen } from "lucide-react"

export function PropertySearchForm() {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Select>
                    <SelectTrigger className="w-full h-14 text-base border-0 focus:ring-0">
                        <div className="flex items-center gap-3">
                            <SquarePen className="w-5 h-5 text-primary" />
                            <SelectValue placeholder="For Buying" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buy">For Buying</SelectItem>
                        <SelectItem value="rent">For Renting</SelectItem>
                    </SelectContent>
                </Select>
                <div className="hidden md:block w-px h-8 bg-border mx-auto" />
                <Select>
                    <SelectTrigger className="w-full h-14 text-base border-0 focus:ring-0">
                         <div className="flex items-center gap-3">
                            <Home className="w-5 h-5 text-primary" />
                            <SelectValue placeholder="House" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                </Select>
                <div className="hidden md:block w-px h-8 bg-border mx-auto" />
                <Select>
                    <SelectTrigger className="w-full h-14 text-base border-0 focus:ring-0">
                         <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <SelectValue placeholder="Indonesia" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                    </SelectContent>
                </Select>
                <Button size="lg" className="w-full h-14 text-base rounded-xl">Find Property</Button>
            </div>
        </div>
    )
}

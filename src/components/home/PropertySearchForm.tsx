"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, MapPin, Search } from "lucide-react"
import { Input } from "../ui/input"

export function PropertySearchForm() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">
                <div className="md:col-span-2 relative">
                    <Input placeholder="Search for a location" className="h-14 pl-12 text-base border-0 focus-visible:ring-1 focus-visible:ring-primary" />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                </div>
                <Select defaultValue="buy">
                    <SelectTrigger className="w-full h-14 text-base border-0 focus:ring-1 focus:ring-primary">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="buy">For Buying</SelectItem>
                        <SelectItem value="rent">For Renting</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="house">
                    <SelectTrigger className="w-full h-14 text-base border-0 focus:ring-1 focus:ring-primary">
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
                <Button size="lg" className="w-full h-14 text-base rounded-xl">Find Property</Button>
            </div>
        </div>
    )
}

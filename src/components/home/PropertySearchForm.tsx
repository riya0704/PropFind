"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Home, MapPin } from "lucide-react"

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
)

export function PropertySearchForm() {
    return (
        <div className="bg-background p-6 rounded-full shadow-2xl w-full border">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <Select defaultValue="buy">
                    <SelectTrigger className="w-full md:w-auto h-14 text-base border focus:ring-0 focus:ring-offset-0 rounded-full pl-6 pr-8">
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
                    <SelectTrigger className="w-full md:w-auto h-14 text-base border focus:ring-0 focus:ring-offset-0 rounded-full pl-6 pr-8">
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
                    <SelectTrigger className="w-full md:w-auto h-14 text-base border focus:ring-0 focus:ring-offset-0 rounded-full pl-6 pr-8">
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
                <Button size="lg" className="w-full md:w-auto md:flex-grow h-14 text-base rounded-full px-10">
                    Find Property
                </Button>
            </div>
        </div>
    )
}

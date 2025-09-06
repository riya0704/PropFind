"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "../ui/input"

export function StartJourney() {
    return (
        <section className="py-24">
            <div className="container">
                 <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Start Your Journey Today!</h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        Create a profile in seconds and find your ideal home.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full border">
                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Input placeholder="Enter Your Name" className="h-14 text-base border-gray-200 focus:ring-primary" />
                        <Select>
                            <SelectTrigger className="w-full h-14 text-base border-gray-200 focus:ring-primary">
                                <SelectValue placeholder="Select User Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="buyer">Buyer</SelectItem>
                                <SelectItem value="renter">Renter</SelectItem>
                                <SelectItem value="seller">Seller</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input placeholder="Enter Your Location" className="h-14 text-base border-gray-200 focus:ring-primary" />
                        
                        <Button size="lg" className="w-full h-14 text-base rounded-xl">Continue</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

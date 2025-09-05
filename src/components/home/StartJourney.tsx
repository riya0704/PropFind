"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "../ui/input"

export function StartJourney() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Start Your Journey Today!</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Get started with our seamless and easy process to find your dream home.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Input placeholder="Enter your name" className="h-14 text-base border-gray-200 focus:ring-primary" />
                        <Select defaultValue="house">
                            <SelectTrigger className="w-full h-14 text-base border-gray-200 focus:ring-primary">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="house">House</SelectItem>
                                <SelectItem value="apartment">Apartment</SelectItem>
                                <SelectItem value="condo">Condo</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input placeholder="Enter your location" className="h-14 text-base border-gray-200 focus:ring-primary" />
                        
                        <Button size="lg" className="w-full h-14 text-base rounded-xl">Continue</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

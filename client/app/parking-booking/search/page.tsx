'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { MapPin, DollarSign, Star } from 'lucide-react'

// Mock data for parking lots
const parkingLots = [
  { id: 1, name: "Downtown Truck Stop", location: "123 Main St, Anytown, USA", price: 25, rating: 4.5, amenities: ["Showers", "Restaurant", "24/7 Security"] },
  { id: 2, name: "Highway Rest Area", location: "456 Interstate Hwy, Somewhere, USA", price: 15, rating: 3.8, amenities: ["Restrooms", "Vending Machines"] },
  { id: 3, name: "Secure Parking Facility", location: "789 Industrial Pkwy, Bigcity, USA", price: 35, rating: 4.8, amenities: ["24/7 Security", "Electric Hookups", "Repair Shop"] },
]

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState(parkingLots)
  const [priceRange, setPriceRange] = useState([0, 50])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement actual search logic here
    console.log("Search submitted")
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Find Truck Parking</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter city or zip code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="truck-size">Truck Size</Label>
                <Select>
                  <SelectTrigger id="truck-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (20ft)</SelectItem>
                    <SelectItem value="medium">Medium (40ft)</SelectItem>
                    <SelectItem value="large">Large (53ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amenities">Amenities</Label>
                <Select>
                  <SelectTrigger id="amenities">
                    <SelectValue placeholder="Select amenities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="showers">Showers</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="security">24/7 Security</SelectItem>
                    <SelectItem value="repair">Repair Shop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Price Range (per night)</Label>
              <Slider
                min={0}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="security" />
              <Label htmlFor="security">24/7 Security Only</Label>
            </div>
            <Button type="submit" className="w-full">Search</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((lot) => (
          <Card key={lot.id}>
            <CardHeader>
              <CardTitle>{lot.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {lot.location}
              </p>
              <p className="flex items-center text-sm mb-2">
                <DollarSign className="h-4 w-4 mr-1" />
                ${lot.price} per night
              </p>
              <p className="flex items-center text-sm mb-2">
                <Star className="h-4 w-4 mr-1" />
                {lot.rating} / 5
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold mb-1">Amenities:</p>
                <ul className="text-sm text-gray-500">
                  {lot.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <Button className="w-full mt-4">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


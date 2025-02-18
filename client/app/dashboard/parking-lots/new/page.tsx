'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AddNewParkingLotPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsLoading(false)
    router.push('/dashboard/parking-lots')
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Add New Parking Lot</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Parking Lot Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Parking Lot Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalSpots">Total Spots</Label>
                <Input id="totalSpots" type="number" min="1" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerNight">Price per Night ($)</Label>
                <Input id="pricePerNight" type="number" min="0" step="0.01" required />
              </div>
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
                  <SelectItem value="wifi">Wi-Fi</SelectItem>
                  <SelectItem value="repair">Repair Shop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add Parking Lot'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


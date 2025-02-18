'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BookingPage({ params }: { params: { lotId: string } }) {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // TODO: Implement actual booking submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsLoading(false)
    router.push('/dashboard/bookings')
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Book a Parking Spot</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Reservation Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="spot">Select Parking Spot</Label>
              <Select>
                <SelectTrigger id="spot">
                  <SelectValue placeholder="Choose a spot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A1">Spot A1</SelectItem>
                  <SelectItem value="A2">Spot A2</SelectItem>
                  <SelectItem value="A3">Spot A3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Select>
                <SelectTrigger id="vehicle">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semi">Semi-Truck</SelectItem>
                  <SelectItem value="box">Box Truck</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="license">License Plate</Label>
              <Input id="license" required />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


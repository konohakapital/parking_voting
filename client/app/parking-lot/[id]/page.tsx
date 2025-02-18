'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, Star, Clock, Truck, Shield } from 'lucide-react'

// Mock data for a single parking lot
const parkingLot = {
  id: 1,
  name: "Downtown Truck Stop",
  location: "123 Main St, Anytown, USA",
  description: "A spacious and secure parking facility located in the heart of downtown, offering a range of amenities for truck drivers.",
  price: 25,
  rating: 4.5,
  totalReviews: 128,
  amenities: ["Showers", "Restaurant", "24/7 Security", "WiFi", "Laundry", "Repair Shop"],
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  hours: "Open 24/7",
  capacity: {
    total: 100,
    available: 15,
  },
  restrictions: "Maximum vehicle length: 53 feet",
}

interface ParkingSpot {
  id: string;
  lotId: string;
  number: string;
  isOccupied: boolean;
}

export default function ParkingLotPage({ params }: { params: { id: string } }) {
  const [spots, setSpots] = useState<ParkingSpot[]>([])

  useEffect(() => {
    const fetchSpots = async () => {
      // In a real app, this would fetch from your API based on the lot ID
      const res = await fetch('/api/parking-spots')
      const data = await res.json()
      setSpots(data)
    }

    fetchSpots()

    // Set up a WebSocket connection for real-time updates
    const ws = new WebSocket('ws://localhost:3000/ws')
    ws.onmessage = (event) => {
      const updatedSpot = JSON.parse(event.data)
      setSpots(prevSpots => 
        prevSpots.map(spot => 
          spot.id === updatedSpot.id ? updatedSpot : spot
        )
      )
    }

    return () => {
      ws.close()
    }
  }, [params.id])

  // In a real application, you would fetch the parking lot data based on the ID
  if (parseInt(params.id) !== parkingLot.id) {
    notFound()
  }

  const availableSpots = spots.filter(spot => !spot.isOccupied).length

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{parkingLot.name}</h1>
        <Button>Book Now</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <Image
                src={parkingLot.images[0]}
                alt={parkingLot.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              {parkingLot.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-video">
                  <Image
                    src={image}
                    alt={`${parkingLot.name} - Image ${index + 2}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parking Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <p>{parkingLot.location}</p>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              <p>${parkingLot.price} per night</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <p>{parkingLot.rating} / 5 ({parkingLot.totalReviews} reviews)</p>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <p>{parkingLot.hours}</p>
            </div>
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2" />
              <p>{availableSpots} / {spots.length} spots available</p>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <p>{parkingLot.restrictions}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{parkingLot.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {parkingLot.amenities.map((amenity, index) => (
              <Badge key={index} variant="secondary">{amenity}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Parking Spot Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-2">
            {spots.map((spot) => (
              <div
                key={spot.id}
                className={`p-2 text-center rounded ${
                  spot.isOccupied ? 'bg-red-200' : 'bg-green-200'
                }`}
              >
                {spot.number}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


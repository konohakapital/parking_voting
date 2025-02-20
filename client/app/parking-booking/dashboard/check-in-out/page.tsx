"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function CheckInOutPage() {
  const [bookingCode, setBookingCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleCheckInOut = async (action: "check-in" | "check-out") => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/check-in-out`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingCode, action }),
      })

      if (!response.ok) throw new Error(`${action} failed`)

      const data = await response.json()
      toast({
        title: `${action === "check-in" ? "Check-in" : "Check-out"} Successful`,
        description: data.message,
      })
      setBookingCode("")
    } catch (error) {
      console.error(`${action} error:`, error)
      toast({
        title: `${action === "check-in" ? "Check-in" : "Check-out"} Failed`,
        description: "Please try again or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Check-in / Check-out</h1>

      <Card>
        <CardHeader>
          <CardTitle>Enter Your Booking Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bookingCode">Booking Code</Label>
              <Input
                id="bookingCode"
                value={bookingCode}
                onChange={(e) => setBookingCode(e.target.value)}
                placeholder="Enter your booking code"
              />
            </div>
            <div className="flex space-x-4">
              <Button onClick={() => handleCheckInOut("check-in")} disabled={isLoading || !bookingCode}>
                Check-in
              </Button>
              <Button onClick={() => handleCheckInOut("check-out")} disabled={isLoading || !bookingCode}>
                Check-out
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


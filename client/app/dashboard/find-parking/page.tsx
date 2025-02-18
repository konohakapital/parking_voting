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

export default function FindParkingPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find Parking</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Enter city or address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
              />
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
            <div className="flex items-end">
              <Button className="w-full">Search</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Card className="md:order-2">
          <CardHeader>
            <CardTitle>Available Spots</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((spot) => (
              <div
                key={spot}
                className="flex items-center space-x-4 rounded-lg border p-4"
              >
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Parking Spot #{spot}</p>
                  <p className="text-xs text-muted-foreground">
                    Available Now · $15/hour
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm">Book Now</Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="md:order-1">
          <CardContent className="p-0">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Interactive map will be displayed here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


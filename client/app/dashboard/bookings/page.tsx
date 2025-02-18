import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const bookings = [
  {
    id: "B001",
    location: "Truck Stop A",
    startDate: "2023-05-15",
    endDate: "2023-05-16",
    duration: "24h",
    status: "Completed",
    amount: "$75.00",
  },
  {
    id: "B002",
    location: "Rest Area B",
    startDate: "2023-05-20",
    endDate: "2023-05-21",
    duration: "12h",
    status: "Upcoming",
    amount: "$45.00",
  },
  {
    id: "B003",
    location: "Parking Lot C",
    startDate: "2023-05-25",
    endDate: "2023-05-26",
    duration: "48h",
    status: "Active",
    amount: "$120.00",
  },
]

export default function BookingsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">My Bookings</CardTitle>
          <Button>New Booking</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.location}</TableCell>
                  <TableCell>{booking.startDate}</TableCell>
                  <TableCell>{booking.endDate}</TableCell>
                  <TableCell>{booking.duration}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "Completed"
                          ? "secondary"
                          : booking.status === "Active"
                          ? "default"
                          : "outline"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{booking.amount}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


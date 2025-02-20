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
import Link from 'next/link'

const parkingLots = [
  { id: 'PL001', name: 'Downtown Lot', totalSpots: 50, availableSpots: 10, status: 'Active' },
  { id: 'PL002', name: 'Highway Rest Stop', totalSpots: 100, availableSpots: 25, status: 'Active' },
  { id: 'PL003', name: 'Industrial Park', totalSpots: 75, availableSpots: 5, status: 'Maintenance' },
]

export default function ParkingLotsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Parking Lots</h1>
        <Button asChild>
          <Link href="/dashboard/parking-lots/new">Add New Parking Lot</Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Parking Lots</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Total Spots</TableHead>
                <TableHead>Available Spots</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parkingLots.map((lot) => (
                <TableRow key={lot.id}>
                  <TableCell className="font-medium">{lot.id}</TableCell>
                  <TableCell>{lot.name}</TableCell>
                  <TableCell>{lot.totalSpots}</TableCell>
                  <TableCell>{lot.availableSpots}</TableCell>
                  <TableCell>
                    <Badge
                      variant={lot.status === "Active" ? "default" : "secondary"}
                    >
                      {lot.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">View Details</Button>
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


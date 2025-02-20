import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentBookings = [
  { id: "B001", driver: "Alice Smith", spot: "A1", startDate: "2023-05-15", endDate: "2023-05-16", amount: "$75.00" },
  { id: "B002", driver: "Bob Johnson", spot: "B3", startDate: "2023-05-20", endDate: "2023-05-21", amount: "$45.00" },
  {
    id: "B003",
    driver: "Charlie Brown",
    spot: "C2",
    startDate: "2023-05-25",
    endDate: "2023-05-27",
    amount: "$120.00",
  },
  { id: "B004", driver: "David Lee", spot: "A4", startDate: "2023-05-28", endDate: "2023-05-29", amount: "$60.00" },
  { id: "B005", driver: "Eva Garcia", spot: "B1", startDate: "2023-05-30", endDate: "2023-06-01", amount: "$90.00" },
]

export function RecentBookings() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Booking ID</TableHead>
          <TableHead>Driver</TableHead>
          <TableHead>Spot</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentBookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-medium">{booking.id}</TableCell>
            <TableCell>{booking.driver}</TableCell>
            <TableCell>{booking.spot}</TableCell>
            <TableCell>{booking.startDate}</TableCell>
            <TableCell>{booking.endDate}</TableCell>
            <TableCell>{booking.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


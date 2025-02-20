import { NextResponse } from "next/server"

// This would be replaced with actual database queries in a production environment
const notifications = [
  { id: "1", message: "New booking for spot A1", read: false, createdAt: new Date().toISOString() },
  {
    id: "2",
    message: "Parking lot maintenance scheduled",
    read: true,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
]

export async function GET() {
  return NextResponse.json(notifications)
}

export async function POST(request: Request) {
  const { message } = await request.json()
  const newNotification = {
    id: Date.now().toString(),
    message,
    read: false,
    createdAt: new Date().toISOString(),
  }
  notifications.unshift(newNotification)
  return NextResponse.json(newNotification)
}


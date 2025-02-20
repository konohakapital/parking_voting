import { NextResponse } from "next/server"

let notifications = [
  { id: "1", message: "Notification 1", read: false },
  { id: "2", message: "Notification 2", read: false },
]

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { read } = await request.json()
  // In a real application, you would update the notification in the database
  // This is a mock implementation
  notifications = notifications.map((n) => (n.id === params.id ? { ...n, read } : n))
  return NextResponse.json({ success: true })
}


import { NextResponse } from 'next/server'

// This would be replaced with an actual database in a production environment
let parkingSpots = new Map([
  ['1', { id: '1', lotId: 'PL001', number: 'A1', isOccupied: false }],
  ['2', { id: '2', lotId: 'PL001', number: 'A2', isOccupied: true }],
  ['3', { id: '3', lotId: 'PL001', number: 'A3', isOccupied: false }],
])

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const spot = await parkingSpots.get(params.id)
  if (!spot) {
    return NextResponse.json({ error: 'Parking spot not found' }, { status: 404 })
  }
  return NextResponse.json(spot)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const spot = await parkingSpots.get(params.id)
  if (!spot) {
    return NextResponse.json({ error: 'Parking spot not found' }, { status: 404 })
  }

  const body = await request.json()
  const updatedSpot = { ...spot, ...body }
  parkingSpots.set(params.id, updatedSpot)

  return NextResponse.json(updatedSpot)
}


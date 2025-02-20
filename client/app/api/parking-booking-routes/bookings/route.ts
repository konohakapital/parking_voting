import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
})

export async function POST(request: Request) {
  const booking = await request.json()

  try {
    // TODO: Save booking to database

    // Calculate the total amount based on the duration of stay
    const startDate = new Date(booking.startDate)
    const endDate = new Date(booking.endDate)
    const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
    const amount = nights * 2500 // $25 per night, in cents

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Parking Spot ${booking.spot}`,
              description: `${nights} night(s) from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/cancel`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Booking failed" }, { status: 500 })
  }
}

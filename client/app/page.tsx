import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MapPin, Truck, Clock, Shield } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MapPin className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">TruckParking.live</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Truck Parking Anywhere, Anytime
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  TruckParking.live connects drivers with available parking spots. Book secure locations and plan your route with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/login">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                <p className="text-gray-500 dark:text-gray-400">Find and reserve parking spots with just a few taps.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Nationwide Coverage</h3>
                <p className="text-gray-500 dark:text-gray-400">Access parking locations across the country.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Real-time Availability</h3>
                <p className="text-gray-500 dark:text-gray-400">See up-to-date information on available spots.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Search</h3>
                <p className="text-gray-500 dark:text-gray-400">Enter your location and parking requirements.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Book</h3>
                <p className="text-gray-500 dark:text-gray-400">Choose your spot and confirm your reservation.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Park</h3>
                <p className="text-gray-500 dark:text-gray-400">Arrive at your reserved spot and park with ease.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">For Drivers</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    No subscription required
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    Pay only for what you book
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    Transparent pricing
                  </li>
                </ul>
                <Button className="mt-auto" asChild>
                  <Link href="/login">Start Booking</Link>
                </Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">For Operators</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    List your parking spots for free
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    Small commission on bookings
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    Increase your lot's visibility
                  </li>
                </ul>
                <Button className="mt-auto" asChild>
                  <Link href="/operator/signup">Become an Operator</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 TruckParking.live. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


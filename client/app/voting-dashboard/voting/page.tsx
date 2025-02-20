"use client";

import VotingSection from "../components/VotingSection"
import ProgressBar from "../components/ProgressBar"
import Leaderboard from "../../../components/voting/components/voting/Leaderboard"
import EmailSignUp from "../components/EmailSignUp"
import ShareCTA from "../../../components/voting/components/voting/ShareCTA"

export default function TruckStopDesigner() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Help Us Design the Ultimate Truck Stop!</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="my-8 text-center">
          <p className="text-xl">
            Welcome to our community-driven truck stop design project! Your votes will shape the features and amenities of
            our new facility. Explore the options below and make your voice heard!
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <VotingSection
            title="Truck Parking"
            description="Vote on the number of truck parking spaces and their layout."
            options={["100 Parallel Spaces", "150 Angled Spaces", "200 Mixed Layout"]}
            type="slider"  // Make it a slider for more interactive voting
            icon="truck-parking" // Custom icons for each option
          />
          <VotingSection
            title="Fueling Stations"
            description="Choose the types of fueling stations to include."
            options={["Diesel Only", "Diesel & Electric", "Diesel, Electric & Natural Gas"]}
            type="toggle"  // Toggle buttons for on/off options
            icon="fuel-pump"
          />
          <VotingSection
            title="Convenience Store & Amenities"
            description="Select the amenities you'd like to see in the store."
            options={["Basic Essentials", "Extended Trucker Supplies", "Full Service Center"]}
            type="checkbox"  // Allow multiple selections
            icon="store"
          />
          <VotingSection
            title="Dining Area"
            description="Vote on your preferred dining options."
            options={["Fast Food Only", "Mix of Fast Food & Diner", "Full-Service Restaurant"]}
            type="carousel" // Carousel for more visual voting
            icon="restaurant"
          />
          <VotingSection
            title="Truck Maintenance & Service"
            description="Should we include a truck service area?"
            options={["No Service Area", "Basic Maintenance", "Full Service Center"]}
            type="radio"  // Simple radio button selection
            icon="service"
          />
          <VotingSection
            title="Car Parking"
            description="How should we handle car parking?"
            options={["Separate Car Lot", "Mixed with Truck Parking", "Limited Car Spaces"]}
            type="toggle"
            icon="car-parking"
          />
          <VotingSection
            title="Security & Safety"
            description="Vote on security features for the truck stop."
            options={["Basic Lighting", "Cameras & Lighting", "Full Security Service"]}
            type="radio"
            icon="security"
          />
        </div>
        <ProgressBar />
        <Leaderboard />
        <EmailSignUp />
        <ShareCTA />
      </main>
    </div>
  )
}


"use client"

import { useState } from "react"
import VotingSection from "./VotingSection"
import CommentSection from "./CommentSection"
import AuthButton from "./AuthButton"
import UserVoteHistory from "./UserVoteHistory"
import type { Session } from "next-auth"

interface VotingPageProps {
  session: Session | null
}

export default function VotingPage({ session }: VotingPageProps) {
  const [votingOptions] = useState([
    {
      id: 1,
      title: "Truck Parking Layout",
      options: ["100 Parallel Spaces", "150 Angled Spaces", "200 Mixed Layout"],
      icon: "truck-icon",
    },
    {
      id: 2,
      title: "Fueling Stations",
      options: ["Diesel Only", "Diesel & Electric", "Diesel, Electric & Natural Gas"],
      icon: "fuel-icon",
    },
    {
      id: 3,
      title: "Dining Options",
      options: ["Fast Food Only", "Mix of Fast Food & Diner", "Full-Service Restaurant"],
      icon: "restaurant-icon",
    },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Truck Stop Design Voting</h1>
        <AuthButton />
      </div>
      <p className="text-xl mb-8">
        Welcome to our community-driven truck stop design project! Your votes will shape the features and amenities of
        our new facility. Explore the options below and make your voice heard!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {votingOptions.map((option) => (
            <VotingSection
              key={option.id}
              id={option.id}
              title={option.title}
              options={option.options}
              session={session}
              icon={option.icon}
            />
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Community Discussion</h2>
          <CommentSection session={session} optionId={1} />
          {session && <UserVoteHistory session={session} />}
        </div>
      </div>
    </div>
  )
}


"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import type { Session } from "next-auth"
import { saveVoteLocally, getLocalVote } from "../utils/localStorage"

interface VotingSectionProps {
  id: number
  title: string
  options: string[]
  session: Session | null
  icon: string
}

export default function VotingSection({ id, title, options, session, icon }: VotingSectionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [voteCount, setVoteCount] = useState<Record<string, number>>({})

  useEffect(() => {
    const fetchVoteData = async () => {
      const localVote = getLocalVote(id)
      if (localVote) {
        setSelectedOption(localVote)
      }
      await fetchUserVote()
      await fetchVoteCounts()
    }

    fetchVoteData()
  }, [id, session])

  const fetchUserVote = async () => {
    if (session && session.user) {
      const response = await fetch(`/api/vote?userId=${session.user.id}&optionId=${id}`)
      const data = await response.json()
      if (data.vote) {
        setSelectedOption(data.vote.optionId)
      }
    }
  }

  const fetchVoteCounts = async () => {
    const counts: Record<string, number> = {}
    for (const option of options) {
      const response = await fetch(`/api/vote?optionId=${id}`)
      const data = await response.json()
      counts[option] = data.count
    }
    setVoteCount(counts)
  }

  const handleVote = async (option: string) => {
    if (session) {
      await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ optionId: id, option }),
      })
    } else {
      saveVoteLocally(id, option)
    }
    setSelectedOption(option)
    setVoteCount((prev) => ({ ...prev, [option]: (prev[option] || 0) + 1 }))
  }

  return (
    <div className="voting-section">
      <div className="flex items-center mb-4">
        <Image src={`/images/${icon}.svg`} alt={title} width={24} height={24} className="mr-2" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleVote(option)}
            className={`w-full p-2 rounded flex items-center ${
              selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span className="flex-grow text-left">{option}</span>
            <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-sm">
              {voteCount[option] || 0} votes
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}


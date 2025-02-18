"use client"

import { useState, useEffect } from "react"
import type { Session } from "next-auth"

interface Vote {
  id: number
  title: string
  option: string
  createdAt: string
}

interface UserVoteHistoryProps {
  session: Session
}

export default function UserVoteHistory({ session }: UserVoteHistoryProps) {
  const [voteHistory, setVoteHistory] = useState<Vote[]>([])

  useEffect(() => {
    fetchVoteHistory()
  }, [])

  const fetchVoteHistory = async () => {
    if (session && session.user) {
      const response = await fetch(`/api/vote?userId=${session.user.id}`)
      const data = await response.json()
      setVoteHistory(data)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Voting History</h2>
      <div className="space-y-2">
        {voteHistory.map((vote) => (
          <div key={vote.id} className="bg-gray-100 p-4 rounded">
            <p className="font-bold">{vote.title}</p>
            <p>Your vote: {vote.option}</p>
            <p className="text-sm text-gray-500">{new Date(vote.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


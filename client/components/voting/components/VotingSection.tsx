/* app/components/VotingSection.tsx */
"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CommentsSection from "@/components/CommentSection"

interface VotingSectionProps {
  title: string
  description: string
  options: string[]
  type: "radio" | "slider" | "toggle" | "checkbox"
  icon?: string
}

export default function VotingSection({
  title,
  description,
  options,
  type,
  icon,
}: VotingSectionProps) {
  const [votes, setVotes] = useState<number[]>(new Array(options.length).fill(0))
  const [userVote, setUserVote] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [comments, setComments] = useState<{ user: string, text: string, time: string }[]>([])

  const handleVote = (index: number) => {
    if (userVote === null) {
      const newVotes = [...votes]
      newVotes[index]++
      setVotes(newVotes)
      setUserVote(index)
    }
  }

  const handleSliderChange = (value: number) => {
    if (userVote === null) {
      const newVotes = [...votes]
      newVotes[value]++
      setVotes(newVotes)
      setUserVote(value)
    }
  }

  const addComment = (comment: { user: string, text: string, time: string }) => {
    setComments((prevComments) => [...prevComments, comment])
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>

      <button
        className="flex items-center justify-between w-full text-left mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold">View Options</span>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* Voting Options */}
      {isExpanded && (
        <div className="space-y-4">
          {type === "radio" && options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-3 rounded ${
                userVote === index ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleVote(index)}
              disabled={userVote !== null}
            >
              {icon && <img src={icon} alt="Option Icon" className="inline-block w-5 h-5 mr-2" />}
              {option} ({votes[index]} votes)
            </button>
          ))}

          {type === "slider" && (
            <div className="space-y-2">
              <input
                type="range"
                min={0}
                max={options.length - 1}
                onChange={(e) => handleSliderChange(Number(e.target.value))}
                disabled={userVote !== null}
                className="w-full"
                title="Slider for voting options"
              />
              <div className="flex justify-between">
                {options.map((option, index) => (
                  <span key={index} className="text-sm">{option}</span>
                ))}
              </div>
            </div>
          )}

          {type === "toggle" && (
            <div className="space-y-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full p-3 rounded ${
                    userVote === index ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleVote(index)}
                  disabled={userVote !== null}
                >
                  {option} ({votes[index]} votes)
                </button>
              ))}
            </div>
          )}

          {type === "checkbox" && (
            <div className="space-y-2">
              {options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    onChange={() => handleVote(index)}
                    checked={userVote === index}
                    disabled={userVote !== null}
                    title={`Vote for ${option}`}
                  />
                  <span>{option} ({votes[index]} votes)</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Comments Section */}
      <CommentsSection title={title} comments={comments} onAddComment={addComment} />
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full p-3 rounded bg-gray-100 hover:bg-gray-200"
          >
            {option}
          </button>
        ))}

        <Link
          href={`/voting/${title.toLowerCase().replace(/ /g, "-")}`}
          className="text-blue-500 mt-4 block"
        >
          Join the Discussion
        </Link>
      </div>
    </div>
  )
}


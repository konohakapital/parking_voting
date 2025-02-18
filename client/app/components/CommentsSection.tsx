"use client"

import Link from "next/link"
import { useState } from "react"

interface CommentProps {
  user: string
  text: string
  time: string
}

interface CommentsSectionProps {
  title: string
  comments: CommentProps[]
  onAddComment: (comment: CommentProps) => void
}

const CommentInput: React.FC<{ onSubmit: (text: string) => void }> = ({ onSubmit }) => {
  const [commentText, setCommentText] = useState("")

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value)
  }

  const handleCommentSubmit = () => {
    onSubmit(commentText)
    setCommentText("") // Clear input after submitting
  }

  return (
    <div className="flex flex-col items-start">
      <input
        type="text"
        value={commentText}
        onChange={handleCommentChange}
        placeholder="Leave a comment..."
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleCommentSubmit}
        disabled={commentText.trim() === ""}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
      >
        Submit Comment
      </button>
    </div>
  )
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ title, comments, onAddComment }) => {
  const currentDateTime = new Date().toLocaleString()

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <h3 className="text-xl font-semibold mb-4">{title} - Comments</h3>

      <CommentInput onSubmit={(text) => onAddComment({ user: "Anonymous", text, time: currentDateTime })} />

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg">
            <div className="text-sm text-gray-500">{comment.time}</div>
            <div className="font-medium">{comment.user}</div>
            <div className="mt-2">{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsSection


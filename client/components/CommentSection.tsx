"use client"

import { useState, useEffect } from "react"
import type { Session } from "next-auth"

interface Comment {
  id: number
  user: string
  text: string
  createdAt: string
}

interface CommentSectionProps {
  session: Session | null
  optionId: number
}

export default function CommentSection({ session, optionId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    const response = await fetch(`/api/comment?optionId=${optionId}`)
    const data = await response.json()
    setComments(data)
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session) {
      alert("Please log in to comment")
      return
    }
    await fetch("/api/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionId, text: newComment }),
    })
    setNewComment("")
    await fetchComments()
  }

  return (
    <div>
      {session ? (
        <form onSubmit={handleSubmitComment} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Leave a comment..."
          />
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Submit Comment
          </button>
        </form>
      ) : (
        <p className="mb-4 text-red-500">Please log in to comment and view discussions.</p>
      )}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded">
            <p className="font-bold">{comment.user}</p>
            <p>{comment.text}</p>
            <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


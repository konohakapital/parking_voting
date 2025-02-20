"use client"

import { useState } from "react"

export default function EmailSignUp() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setEmail("")
    alert("Thank you for signing up!")
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  )
}


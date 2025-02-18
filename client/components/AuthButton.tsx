"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
        Sign Out
      </button>
    )
  }
  return (
    <div className="space-x-2">
      <Link href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign In
      </Link>
      <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">
        Sign Up
      </Link>
    </div>
  )
}


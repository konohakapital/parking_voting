import VotingPage from "@/components/voting/VotingPage"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="min-h-screen bg-gray-100">
      <VotingPage session={session} />
    </main>
  )
}


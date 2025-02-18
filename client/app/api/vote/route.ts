import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../lib/auth"
import { addVote, getVoteCount } from "../../../lib/fakeData"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const { optionId } = await req.json()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const vote = addVote(session.user.id, optionId)
    return NextResponse.json(vote)
  } catch (error) {
    return NextResponse.json({ error: "Failed to save vote" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const optionId = searchParams.get("optionId")

  if (!optionId) {
    return NextResponse.json({ error: "Option ID is required" }, { status: 400 })
  }

  try {
    const voteCount = getVoteCount(Number.parseInt(optionId))
    return NextResponse.json({ count: voteCount })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch vote count" }, { status: 500 })
  }
}


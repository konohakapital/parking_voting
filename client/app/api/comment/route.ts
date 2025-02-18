import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../lib/auth"
import { addComment, getComments, getUser } from "../../../lib/fakeData"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const { text, optionId } = await req.json()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const comment = addComment(session.user.id, optionId, text)
    return NextResponse.json(comment)
  } catch (error) {
    return NextResponse.json({ error: "Failed to save comment" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const optionId = searchParams.get("optionId")

  if (!optionId) {
    return NextResponse.json({ error: "Option ID is required" }, { status: 400 })
  }

  try {
    const comments = getComments(Number.parseInt(optionId))
    const commentsWithUserNames = comments.map((comment) => {
      const user = getUser(comment.userId)
      return {
        ...comment,
        userName: user ? user.name : "Anonymous",
      }
    })
    return NextResponse.json(commentsWithUserNames)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 })
  }
}


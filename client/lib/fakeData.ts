import { v4 as uuidv4 } from "uuid"

export interface User {
  id: string
  name: string
  email: string
  password: string
}

export interface Vote {
  id: string
  userId: string
  optionId: number
  createdAt: string
}

export interface Comment {
  id: string
  userId: string
  optionId: number
  text: string
  createdAt: string
}

const votes: Vote[] = []
const comments: Comment[] = []
export const fakeUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "$2b$10$8OxDEQCNd/DhNCK9PoIHSOWtUCGBeRyMuMMr0j5GGbUUzTeneQBOK",
  }, // password: password123
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "$2b$10$8OxDEQCNd/DhNCK9PoIHSOWtUCGBeRyMuMMr0j5GGbUUzTeneQBOK",
  }, // password: password123
]

export const addVote = (userId: string, optionId: number): Vote => {
  const vote: Vote = {
    id: uuidv4(),
    userId,
    optionId,
    createdAt: new Date().toISOString(),
  }
  votes.push(vote)
  return vote
}

export const getVoteCount = (optionId: number): number => {
  return votes.filter((vote) => vote.optionId === optionId).length
}

export const addComment = (userId: string, optionId: number, text: string): Comment => {
  const comment: Comment = {
    id: uuidv4(),
    userId,
    optionId,
    text,
    createdAt: new Date().toISOString(),
  }
  comments.push(comment)
  return comment
}

export const getComments = (optionId: number): Comment[] => {
  return comments.filter((comment) => comment.optionId === optionId)
}

export const getUserVotes = (userId: string): Vote[] => {
  return votes.filter((vote) => vote.userId === userId)
}

export const getUser = (userId: string): User | undefined => {
  return fakeUsers.find((user) => user.id === userId)
}


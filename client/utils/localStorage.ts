export const saveVoteLocally = (id: number, option: string) => {
  localStorage.setItem(`vote_${id}`, option)
}

export const getLocalVote = (id: number): string | null => {
  return localStorage.getItem(`vote_${id}`)
}


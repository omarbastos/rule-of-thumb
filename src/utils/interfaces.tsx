import firestore from 'firebase/firestore'

export interface Poll {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: firestore.Timestamp
  votes: Votes
  uid: string
}

export interface Votes {
  positive: number
  negative: number
}

export type CurrentVote = string | null

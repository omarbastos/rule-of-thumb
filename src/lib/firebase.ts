import { initializeApp } from 'firebase/app'
import { Poll } from '../utils/interfaces'
import {
  getFirestore,
  CollectionReference,
  collection,
  DocumentData
} from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: process.env.VITE_FIREBASE_APIKEY,
  authDomain: process.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECTID,
  storageBucket: process.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VITE_FIREBASE_APPID
})
export const firestore = getFirestore()

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

// export all your collections
export const pollsCol = createCollection<Poll>('polls')

import { initializeApp } from 'firebase/app'
import { Poll } from '../utils/interfaces'
import {
  getFirestore,
  CollectionReference,
  collection,
  DocumentData
} from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
})
export const firestore = getFirestore()

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

// export all your collections
export const pollsCol = createCollection<Poll>('polls')

import { initializeApp } from 'firebase/app'
import { Poll } from '../utils/interfaces'
import {
  getFirestore,
  CollectionReference,
  collection,
  DocumentData
} from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAhd3yDebdcvAuL5jDbc0WE5idh5MdHi3k',
  authDomain: 'rule-of-thumb-oh.firebaseapp.com',
  projectId: 'rule-of-thumb-oh',
  storageBucket: 'rule-of-thumb-oh.appspot.com',
  messagingSenderId: '471986831031',
  appId: '1:471986831031:web:93ffab62ce1740ebf71732',
  measurementId: 'G-8E3PMDBGS0'
})
export const firestore = getFirestore()

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

export const pollsCol = createCollection<Poll>('polls')

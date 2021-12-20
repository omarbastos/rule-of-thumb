import { query, onSnapshot } from 'firebase/firestore'
import { pollsCol } from 'services/firebase'
import { useState, useEffect } from 'react'
import { Poll } from 'utils/interfaces'

const useGetPolls = () => {
  const [polls, setPolls] = useState([] as Poll[])
  const fetchPolls = async () => {
    const q = query(pollsCol)
    onSnapshot(q, (querySnapshot) => {
      const newPolls: Poll[] = []
      querySnapshot.forEach((doc) => {
        const poll: Poll = doc.data()
        newPolls.push({ ...poll, uid: doc.id })
      })
      setPolls(newPolls)
    })
  }

  useEffect(() => {
    fetchPolls()
    return () => {
      setPolls([])
    }
  }, [pollsCol])
  return { polls }
}

export default useGetPolls

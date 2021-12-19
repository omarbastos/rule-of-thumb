import CardSquare from 'components/base/Cards/Square'
import React from 'react'
import { Poll } from 'utils/interfaces'

interface Props {
  polls: Poll[]
}

const GridView = ({ polls }: Props) => {
  const SKELETONS = 16
  if (polls.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(SKELETONS)].map(() => (
          <div className="w-60 h-24 border-2 rounded-md mx-auto my-2">
            <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex overflow-x-scroll no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 justify-items-center items-center md:justify-center">
      {polls.map((poll: Poll) => (
        <CardSquare key={poll.uid} {...poll} />
      ))}
    </div>
  )
}

export default GridView

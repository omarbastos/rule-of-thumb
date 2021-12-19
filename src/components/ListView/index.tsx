import CardHorizontal from 'components/base/Cards/Horizontal'
import { Poll } from 'utils/interfaces'

interface Props {
  polls: Poll[]
}

const ListView = ({ polls }: Props) => {
  const SKELETONS = 16
  if (polls.length === 0) {
    return (
      <div className="grid grid-cols-1">
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
    <div className="flex flex-col items-center justify-center">
      {polls.map((poll: Poll) => (
        <CardHorizontal key={poll.uid} {...poll} />
      ))}
    </div>
  )
}

export default ListView

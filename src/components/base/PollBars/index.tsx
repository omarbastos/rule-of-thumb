import React from 'react'
import useWindowDimensions from 'utils/hooks/useWindowDimensions'
import ThumbsDownIcon from '../icons/ThumbsDownIcon'
import ThumbsUpIcon from '../icons/ThumbsUpIcon'

interface Props {
  upVotes: number
  downVotes: number
  square?: boolean
}

const PollBars = ({ upVotes, downVotes, square }: Props) => {
  const { isTablet } = useWindowDimensions()

  return (
    <div
      className={`absolute bottom-0 overflow-hidden w-full ${
        square ? 'h-8' : 'h-10'
      } text-xs flex`}
    >
      <div
        style={{ width: `${upVotes}%`, transition: 'width 2s' }}
        className="shadow-none flex justify-start items-center whitespace-nowrap text-white bg-thumb-up"
        role="progressbar"
      >
        <div className="flex items-center px-4">
          <ThumbsUpIcon
            width={isTablet ? '15px' : '22.5px'}
            height={isTablet ? '15px' : '22.5px'}
          />
          <span className={`ml-2 text-base ${!square && '2xl:text-2xl'}`}>
            {upVotes}%
          </span>
        </div>
      </div>
      <div
        style={{ width: `${downVotes}%`, transition: 'width 2s' }}
        role="progressbar"
        className="shadow-none flex justify-end items-center whitespace-nowrap text-white bg-thumb-down/60"
      >
        <div className="flex items-center px-4">
          <span className={`mr-2 text-base ${!square && '2xl:text-2xl'}`}>
            {downVotes}%
          </span>
          <ThumbsDownIcon
            width={isTablet ? '15px' : '22.5px'}
            height={isTablet ? '15px' : '22.5px'}
          />
        </div>
      </div>
    </div>
  )
}

export default PollBars

import React, { useState } from 'react'

import ThumbsDown from '../../Thumbs/Down'
import ThumbsUp from '../../Thumbs/Up'
import PollBars from '../../PollBars'
import useWindowDimensions from 'utils/hooks/useWindowDimensions'
import { CurrentVote, Poll, Votes } from 'utils/interfaces'
import moment from 'moment'
import { getPercentage } from 'utils'
import { doc } from '@firebase/firestore'
import { pollsCol } from 'lib/firebase'
import { updateDoc } from 'firebase/firestore'
import { CURRENT_VOTES } from '../../../../utils/constants'
import stg from 'utils/strings'

const CardHorizontal = ({
  name,
  description,
  category,
  picture,
  uid,
  lastUpdated,
  votes
}: Poll) => {
  const { isTablet } = useWindowDimensions()
  const { positive, negative } = getPercentage({
    positive: votes?.positive,
    negative: votes?.negative
  })
  const isNegative = negative > positive
  const [isVoted, setIsVoted] = useState(false)
  const [currentVote, setCurrentVote] = useState<CurrentVote>(null)
  const updateVote = async () => {
    if (isVoted) {
      setCurrentVote(null)
      return setIsVoted(false)
    }
    try {
      const pollDocRef = doc(pollsCol, uid)
      await updateDoc(pollDocRef, {
        votes: {
          negative: negative + (currentVote === CURRENT_VOTES.NEGATIVE ? 1 : 0),
          positive: positive + (currentVote === CURRENT_VOTES.POSITIVE ? 1 : 0)
        },
        lastUpdated: new Date()
      })
      setIsVoted(true)
      return setCurrentVote(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={`w-full my-4 h-72 md:h-40 relative `}>
      <img
        className="object-fill  w-full md:w-[18%] h-72 md:h-40"
        src={picture}
        alt={name}
      />
      <div className="absolute left-0 top-0 w-full h-full flex md:bg-gradient-gray">
        <div className="w-1/4 h-40"></div>
        <div className="p-2 flex w-1/2 space-y-2 flex-col items-start justify-start mt-4 lg:mt-0">
          <h4 className="text-xl truncate flex-none lg:text-3xl  font-normal text-white">
            {name}
          </h4>
          <p className="text-sm line-clamp-2 w-full lg:text-base text-white">
            {description}
          </p>
        </div>

        <div className="flex flex-none w-1/4 mb-4 p-4 justify-end items-center">
          {!isVoted && (
            <>
              <ThumbsUp
                width={isTablet ? 16 : 24}
                height={isTablet ? 16 : 24}
                className={`lg:h-10 lg:px-4 ${
                  currentVote === CURRENT_VOTES.POSITIVE
                    ? 'border-solid border-2 border-white'
                    : ''
                }`}
                onClick={() =>
                  setCurrentVote(
                    currentVote === CURRENT_VOTES.POSITIVE
                      ? null
                      : CURRENT_VOTES.POSITIVE
                  )
                }
              />
              <ThumbsDown
                width={isTablet ? 16 : 24}
                height={isTablet ? 16 : 24}
                className={`lg:h-10 lg:px-4 mx-2 ${
                  currentVote === CURRENT_VOTES.NEGATIVE
                    ? 'border-solid border-2 border-white'
                    : ''
                }`}
                onClick={() =>
                  setCurrentVote(
                    currentVote === CURRENT_VOTES.NEGATIVE
                      ? null
                      : CURRENT_VOTES.NEGATIVE
                  )
                }
              />
            </>
          )}
          <button
            disabled={currentVote === null && !isVoted}
            onClick={updateVote}
            className="justify-self-end xl:w-28 bg-black text-base py-1.5 lg:py-2 px-4 whitespace-nowrap text-white border-solid border-2 border-white"
          >
            {isVoted ? stg('vote_again') : stg('vote_now')}
          </button>
        </div>
      </div>
      <div className="absolute font-bold top-2 right-4 text-sm text-white">
        {isVoted
          ? stg('thank_you')
          : `${moment(lastUpdated?.toDate()).fromNow()} in ${category}`}
      </div>
      <div className="absolute top-0 left-0">
        {isNegative ? (
          <ThumbsDown
            width={isTablet ? 16 : 24}
            height={isTablet ? 16 : 24}
            className="h-10 px-4"
            disabled
          />
        ) : (
          <ThumbsUp
            width={isTablet ? 16 : 24}
            height={isTablet ? 16 : 24}
            className="h-10 px-4"
            disabled
          />
        )}
      </div>
      <PollBars upVotes={positive} downVotes={negative}></PollBars>
    </div>
  )
}

export default CardHorizontal

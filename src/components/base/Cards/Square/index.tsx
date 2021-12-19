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

const CardSquare = ({
  name,
  description,
  category,
  picture,
  uid,
  lastUpdated,
  votes
}: Poll) => {
  const { isMobile } = useWindowDimensions()
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
    <div
      className={`flex-shrink-0 mr-3 md:mr-0 w-[300px] h-[300px] md:w-full md:h-[351px] 2xl:h-80 2xl:w-80 self-center relative `}
    >
      <img className="object-cover w-full h-full" src={picture} alt={name} />

      <div className="absolute flex w-full left-0 top-[36%]">
        {isNegative ? (
          <ThumbsDown width={16} height={16} className="h-8 px-2" disabled />
        ) : (
          <ThumbsUp width={16} height={16} className="h-8 px-2" disabled />
        )}

        <div className="px-4 -mt-1 flex space-y-2 flex-col items-start justify-start">
          <h4 className="text-2xl md:text-4xl lg:text-2xl font-normal flex-none text-white line-clamp-1 ">
            {name}
          </h4>
          <p className="text-sm md:text-base font-light lg:text-sm line-clamp-2 w-11/12  text-white">
            {description}
          </p>
          <div className="w-full text-right font-bold text-xs md:text-sm text-white">
            {isVoted
              ? stg('thank_you')
              : `${moment(lastUpdated?.toDate()).fromNow()} in ${category}`}
          </div>
          <div className="self-end flex justify-center items-center">
            {!isVoted && (
              <>
                <ThumbsUp
                  width={16}
                  height={16}
                  className={`lg:p-1.5 ${
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
                  width={16}
                  height={16}
                  className={`p-1.5 mx-2 ${
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
              className="xl:w-28 px-4 py-1 bg-black-transparency text-base whitespace-nowrap text-white border-solid border-2 border-white"
            >
              {isVoted ? stg('vote_again') : stg('vote_now')}
            </button>
          </div>
        </div>
      </div>
      <PollBars square upVotes={positive} downVotes={negative}></PollBars>
    </div>
  )
}

export default CardSquare

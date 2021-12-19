import React, { useState } from 'react'
import stg from 'utils/strings'

interface Props {}

const BannerTop = (props: Props) => {
  const [open, setOpen] = useState(true)
  return open ? (
    <aside className="banner banner-top" role="doc-tip" aria-label="Speak Out">
      <div className="banner__left">
        <span className="block text-sm whitespace-nowrap font-light">
          {stg('speak_out')}
        </span>
        <span className="block text-2xl whitespace-nowrap font-bold">
          {stg('be_counted')}
        </span>
      </div>
      <div className="banner__right">
        <p className="text-xs md:text-base text-[#464646] font-light">
          {stg('banner_top_description')}
        </p>
      </div>
      <button
        className="icon-button"
        onClick={() => setOpen(false)}
        aria-label="close"
      >
        <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" strokeWidth={2} fill="none" fillRule="evenodd">
            <path d="M1 19L19 1M1 1l18 18" />
          </g>
        </svg>
      </button>
    </aside>
  ) : (
    <></>
  )
}

export default BannerTop

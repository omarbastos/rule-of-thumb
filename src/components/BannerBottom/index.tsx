import React from 'react'
import stg from 'utils/strings'
import people750 from '../../assets/img/bg-people.png'
import people1440 from '../../assets/img/bg-people.@2x.png'

interface Props {}

const BannerBottom = (props: Props) => {
  return (
    <aside
      className="banner banner-bottom"
      role="doc-tip"
      aria-label={stg('submit_a_name')}
    >
      <img
        srcSet={`${people750} 750w,  ${people1440} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        className="banner__background"
        src={people750}
        alt="people"
        role="none"
      />
      <div className="banner__left">
        <h2 className="text-lg text-center font-normal">
          {stg('banner_bottom_title')}
        </h2>
      </div>
      <div className="banner__right">
        <button className="text-base text-center border border-b-2 border-black p-2 my-2 w-full">
          {stg('submit_a_name')}
        </button>
      </div>
    </aside>
  )
}

export default BannerBottom

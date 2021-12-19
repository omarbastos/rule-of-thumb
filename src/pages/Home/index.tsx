import HeaderHero from '../../layouts/HeroHeader/HeroHeader'
import BannerTop from '../../components/BannerTop/index'
import BannerBottom from '../../components/BannerBottom/index'

import { Poll } from 'utils/interfaces'
import useGetPolls from 'utils/hooks/useGetPolls'
import CardSquare from 'components/base/Cards/Square'
import GridView from 'components/GridView'
import DropdownMenu from 'components/DropdownMenu'
import { VIEWS } from '../../utils/constants'
import { useEffect, useState } from 'react'
import stg from 'utils/strings'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'
import ListView from 'components/ListView'

interface Props {}

const Home = (props: Props) => {
  const { polls } = useGetPolls()
  const [selectedView, setSelectedView] = useState(VIEWS.LIST)
  const { isMobile } = useWindowDimensions()
  useEffect(() => {
    if (isMobile) {
      setSelectedView(VIEWS.GRID)
    }

    return () => setSelectedView(VIEWS.LIST)
  }, [isMobile])

  return (
    <>
      <HeaderHero />
      <div className="max-centered">
        <BannerTop />
        <main role="main">
          <div className="flex justify-between my-4 md:my-8">
            <h3 className="flex-auto text-2xl md:text-4xl font-light text-[#464646]">
              {stg('previous_rulings')}
            </h3>
            {!isMobile && (
              <DropdownMenu
                selected={selectedView}
                setSelected={setSelectedView}
              />
            )}
          </div>
          {selectedView === VIEWS.LIST ? (
            <ListView polls={polls} />
          ) : (
            <GridView polls={polls} />
          )}
        </main>
        <BannerBottom />
      </div>
    </>
  )
}

export default Home

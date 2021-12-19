import { useState, useEffect } from 'react'

const VIEWPORT_MOBILE = 750
const VIEWPORT_TABLET = 1024
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { width } = windowDimensions
  const isMobile = width < VIEWPORT_MOBILE
  const isTablet = width < VIEWPORT_TABLET
  return { isMobile, isTablet }
}

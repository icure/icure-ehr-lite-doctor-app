import { useState, useEffect } from 'react'

export const getWindowSize = () => {
  const getWindow = () => {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

  const [windowSize, setWindowSize] = useState(getWindow())

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindow())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return windowSize
}

export const breakpoints = {
  sm: 576,
  md: 767,
  lg: 1000,
  xl: 1200,
  xl2: 1300,
}

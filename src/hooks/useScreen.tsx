import React from 'react'

type Screen = {
  sizeName: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  size: number
}

const useScreen = () => {
  const [screen, setScreen] = React.useState<Screen>({
    sizeName: 'md',
    size: 0,
  })

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 768) {
        setScreen({ sizeName: 'md', size: width })
      } else if (width < 1024) {
        setScreen({ sizeName: 'lg', size: width })
      } else {
        setScreen({ sizeName: '3xl', size: width })
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screen
}

export default useScreen

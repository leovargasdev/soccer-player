import AOS from 'aos'
import { useEffect } from 'react'
import { PlayerProvider } from 'hook/usePlayer'

import 'aos/dist/aos.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      AOS.init({
        duration: 1000
      })
    }
  }, [])

  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}

export default MyApp

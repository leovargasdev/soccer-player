import { PlayerProvider } from 'hook/usePlayer'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}

export default MyApp

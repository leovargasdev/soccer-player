import { PlayerProvider } from 'hook/usePlayer'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}

export default MyApp

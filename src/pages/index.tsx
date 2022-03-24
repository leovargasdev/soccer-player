import { Header } from 'components/Header'
import { Main } from 'components/Main'
import Head from 'next/head'

import { usePlayer } from 'hook/usePlayer'
import { Footer } from 'components/Footer'
import { Background } from 'components/Background'

import styles from 'styles/home.module.scss'
const HomePage = () => {
  const { player } = usePlayer()

  return (
    <div className={styles.container} style={{ background: player.color }}>
      <Head>
        <title>
          Soccer Player • {player.firstName + ' ' + player.lastName}
        </title>
      </Head>
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default HomePage

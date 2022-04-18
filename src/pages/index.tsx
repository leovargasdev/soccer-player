import Head from 'next/head'

import { Main } from 'components/Main'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Background } from 'components/Background'

import { usePlayer } from 'hook/usePlayer'

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

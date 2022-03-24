import { Header } from 'components/Header'
import { Main } from 'components/Main'
import Head from 'next/head'

import styles from 'styles/home.module.scss'

import players from 'data/players.json'
import { useState } from 'react'
import { Footer } from 'components/Footer'
import { Background } from 'components/Background'

const HomePage = () => {
  const [player, setPlayer] = useState(players[0])

  return (
    <div className={styles.container} style={{ background: player.color }}>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <Background image={player.image} />
      <Header lastName={player.lastName} />
      <Main {...player} />
      <Footer {...player} />
    </div>
  )
}

export default HomePage

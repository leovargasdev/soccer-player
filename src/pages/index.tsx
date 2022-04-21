import Head from 'next/head'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { Main } from 'components/Main'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Background } from 'components/Background'

import { usePlayer } from 'hook/usePlayer'

import styles from 'styles/home.module.scss'

const HomePage = () => {
  const { player, background } = usePlayer()

  const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false)

  useEffect(() => {
    setLoadingAnimation(true)
    setTimeout(() => setLoadingAnimation(false), 800)
  }, [background])

  const container = classNames(styles.container, {
    [styles.background]: loadingAnimation
  })

  return (
    <div className={container} style={background}>
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

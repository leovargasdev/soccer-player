import { usePlayer } from 'hook/usePlayer'
import styles from './styles.module.scss'

export const Main = () => {
  const { player } = usePlayer()

  return (
    <main className={styles.container}>
      <h2>{player.firstName}</h2>
      <h1>{player.lastName}</h1>
    </main>
  )
}

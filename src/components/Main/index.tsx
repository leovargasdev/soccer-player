import styles from './styles.module.scss'

import { Player } from 'types/player'

export const Main = (player: Player) => (
  <main className={styles.container}>
    <h2>{player.firstName}</h2>
    <h1>{player.lastName}</h1>
  </main>
)

import { usePlayer } from 'hook/usePlayer'
import styles from './styles.module.scss'

export const Header = () => {
  const { changePlayer, player } = usePlayer()

  const handleFirstCharAt = () => {
    return player.lastName.charAt(0)
  }

  return (
    <header className={styles.container}>
      <strong>{handleFirstCharAt()}</strong>
      <button type="button" onClick={changePlayer}>
        <span />
        <span />
      </button>
    </header>
  )
}

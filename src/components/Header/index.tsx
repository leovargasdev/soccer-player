import { useState } from 'react'

import { usePlayer } from 'hook/usePlayer'
import styles from './styles.module.scss'

import players from 'data/players.json'

export const Header = () => {
  const { changePlayer, player, loading } = usePlayer()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [backgroundHover, setBackgroundHover] = useState<string>('')

  const handleFirstCharAt = () => player.lastName.charAt(0)

  return (
    <header className={styles.container}>
      <strong>{handleFirstCharAt()}</strong>

      <div className={`${styles.navigation} ${isShow ? styles.active : ''}`}>
        <button
          type="button"
          className={styles.navigation__button}
          onClick={() => setIsShow(state => !state)}
        >
          <span />
          <span />
        </button>

        <ul className={styles.navigation__items}>
          {players.map((playerItem, index) => (
            <li
              key={playerItem.firstName}
              style={{
                background:
                  backgroundHover === playerItem.lastName ? player.color : ''
              }}
              onClick={() => changePlayer(index)}
              className={loading ? styles.disabled : ''}
              onMouseOver={() => setBackgroundHover(playerItem.lastName)}
              onMouseLeave={() => setBackgroundHover('')}
            >
              {playerItem.firstName} {playerItem.lastName}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

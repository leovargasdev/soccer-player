import { useState } from 'react'

import { usePlayer } from 'hook/usePlayer'
import styles from './styles.module.scss'

import players from 'data/players.json'

export const Header = () => {
  const [backgroundHover, setBackgroundHover] = useState<string>('')
  const [activeNavigation, setActiveNavigation] = useState<boolean>(false)
  const { changePlayer, player } = usePlayer()

  const handleFirstCharAt = () => {
    return player.lastName.charAt(0)
  }

  return (
    <header className={styles.container}>
      <strong>{handleFirstCharAt()}</strong>
      <div className={styles.navigation}>
        <button
          type="button"
          onClick={() => setActiveNavigation(!activeNavigation)}
          className={activeNavigation ? styles['active-button'] : ''}
        >
          <span />
          <span />
        </button>

        <ul className={activeNavigation ? styles.active : ''}>
          {players.map((playerItem, index) => (
            <li
              key={playerItem.firstName}
              style={{
                background:
                  backgroundHover === playerItem.lastName ? player.color : ''
              }}
              onClick={() => changePlayer(index)}
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

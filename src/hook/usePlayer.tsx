import anime from 'animejs'
import { createContext, useContext, useState } from 'react'

import players from 'data/players.json'
import { Player } from 'types/player'

interface PlayerContextData {
  loading: boolean
  player: Player
  changePlayer: (index: number) => void
}

const PlayerContext = createContext({} as PlayerContextData)

const TIME_ANIMATION = 800

export const PlayerProvider = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [player, setPlayer] = useState<Player>(players[3])

  const animationOut = () =>
    anime
      .timeline({ easing: 'easeOutExpo', duration: TIME_ANIMATION })
      .add({ targets: 'main', translateX: [0, 500], opacity: [1, 0] })
      .add({ targets: '#images', opacity: [1, 0] }, `-=${TIME_ANIMATION}`)
      .add(
        { targets: '#footer', translateX: [0, -600], opacity: [1, 0] },
        `-=${TIME_ANIMATION}`
      )

  const animationIn = () =>
    anime
      .timeline({ easing: 'easeOutExpo', duration: TIME_ANIMATION })
      .add({ targets: 'main', translateX: [-100, 0], opacity: [0, 1] })
      .add(
        { targets: '#images', translateY: [100, 0], opacity: [0, 1] },
        `-=${TIME_ANIMATION}`
      )
      .add(
        { targets: '#footer', translateX: [100, 0], opacity: [0, 1] },
        `-=${TIME_ANIMATION}`
      )

  const changePlayer = playerIndex => {
    if (!loading) {
      const indexPlayerActive = players.findIndex(
        findPlayer => player.lastName === findPlayer.lastName
      )

      if (indexPlayerActive !== playerIndex) {
        setLoading(true)

        animationOut()
        setTimeout(() => setPlayer(players[playerIndex]), 600)
        setTimeout(() => {
          animationIn()
          setLoading(false)
        }, 900)
      }
    }
  }

  return (
    <PlayerContext.Provider value={{ player, changePlayer, loading }}>
      {children}
    </PlayerContext.Provider>
  )
}
export const usePlayer = () => {
  const context = useContext(PlayerContext)

  return context
}

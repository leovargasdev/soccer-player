import anime from 'animejs'
import { createContext, useContext, useState } from 'react'

import players from 'data/players.json'
import { Player } from 'types/player'

interface PlayerContextData {
  player: Player
  changePlayer: (index: number) => void
}

const PlayerContext = createContext({} as PlayerContextData)

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState<Player>(players[3])

  const changePlayer = playerIndex => {
    const isActivePlayer = players.findIndex(
      findPlayer => player.lastName === findPlayer.lastName
    )

    if (isActivePlayer !== playerIndex) {
      anime
        .timeline({
          easing: 'easeOutExpo',
          duration: 800
        })
        .add({
          targets: 'main',
          translateX: [0, 500],
          opacity: [1, 0]
        })
        .add(
          {
            targets: '#images',
            translateY: [0, -600],
            opacity: [1, 0]
          },
          '-=800'
        )

      setTimeout(() => {
        setPlayer(players[playerIndex])

        anime
          .timeline({
            easing: 'easeOutExpo',
            duration: 800
          })
          .add({
            targets: 'main',
            translateX: [-200, 0],
            opacity: [0, 1]
          })
          .add(
            {
              targets: '#images',
              translateY: [300, 0],
              opacity: [0, 1]
            },
            '-=800'
          )
      }, 800)
    }
  }

  return (
    <PlayerContext.Provider value={{ player, changePlayer }}>
      {children}
    </PlayerContext.Provider>
  )
}
export const usePlayer = () => {
  const context = useContext(PlayerContext)

  return context
}

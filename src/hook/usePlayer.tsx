import AOS from 'aos'
import { createContext, useContext, useState } from 'react'

import players from 'data/players.json'
import { Player } from 'types/player'

interface PlayerContextData {
  isLoading: boolean
  player: Player
  changePlayer: () => void
}

const PlayerContext = createContext({} as PlayerContextData)

export const PlayerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [player, setPlayer] = useState<Player>(players[0])

  const changePlayer = () => {
    setIsLoading(true)
    const isActivePlayer = players.findIndex(
      findPlayer => player.lastName === findPlayer.lastName
    )

    setPlayer(isActivePlayer === 0 ? players[1] : players[0])
    setTimeout(() => {
      setIsLoading(false)
      AOS.refreshHard()
    }, 50)
  }

  return (
    <PlayerContext.Provider value={{ player, changePlayer, isLoading }}>
      {children}
    </PlayerContext.Provider>
  )
}
export const usePlayer = () => {
  const context = useContext(PlayerContext)

  return context
}

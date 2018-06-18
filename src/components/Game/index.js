// Libs
import React from 'react'

// Components
import Box from './Box'
import GameLoader from './GameLoader'
import Lid from './Lid'

// CSS
import './styles.sass'


const Game = () => (
  <div className="game">
    <Box />
    <GameLoader width={358} height={358} />
    <Lid />
  </div>
)

export default Game


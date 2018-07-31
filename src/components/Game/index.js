// Libs
import React from 'react'

// Components
import Box from './Box'
import GameLoader from './GameLoader'
import Lid from './Lid'
import Congrats from './Congrats'
import Warning from './Warning'

// CSS
import './styles.sass'


const Game = () => (
  <div className="game">
    <Box />
    <GameLoader />
    <Lid />
    <Congrats />
    <Warning />
  </div>
)

export default Game


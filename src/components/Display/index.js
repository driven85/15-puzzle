// Libs
import React from 'react'

// Components
import Clock from './Clock'
import MoveCounter from './MoveCounter'

// CSS
import './styles.sass'


const Display = () => (
  <div className="display">
    <Clock />
    <MoveCounter />
  </div>
)

export default Display


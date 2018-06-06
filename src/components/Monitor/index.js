// Libs
import React from 'react'

// Components
import Clock from './Clock'
import MoveCounter from './MoveCounter'

// CSS
import './styles.sass'


const Monitor = () => (
  <div className="monitor">
    <Clock />
    <MoveCounter />
  </div>
)

export default Monitor


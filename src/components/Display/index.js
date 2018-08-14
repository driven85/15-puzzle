// Libs
import React from 'react'

// Components
import Card from 'components/UI/Card'
import Clock from './Clock'
import MoveCounter from './MoveCounter'

// CSS
import './styles.sass'


const Display = () =>
  <Card className="display">
    <Clock />
    <MoveCounter />
  </Card>

export default Display


// Libs
import React from 'react'

// Components
import Display from 'components/Display'
import Game from 'components/Game'
import RemoteControl from 'components/RemoteControl'

// CSS
import './styles.sass'


const App = () => (
  <div className="app">
    <Display />
    <Game />
    <RemoteControl />
  </div>
)

export default App


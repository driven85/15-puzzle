// Libs
import React from 'react'

// Components
import Monitor from 'components/Monitor'
import Game from 'components/Game'
import RemoteControl from 'components/RemoteControl'

// CSS
import './styles.sass'


const App = () => (
  <div className="app">
    <Monitor />
    <Game />
    <RemoteControl />
  </div>
)

export default App


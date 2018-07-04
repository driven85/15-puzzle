// Libs
import React from 'react'

// Components
import Display from 'components/Display'
import Game from 'components/Game'
import MediaQuery from 'components/MediaQuery'
import RemoteControl from 'components/RemoteControl'
import SettingsDialog from 'components/SettingsDialog'

// CSS
import './styles.sass'


const App = () => (
  <div className="app">
    <MediaQuery>
      <Display />
      <Game />
      <RemoteControl />
      <SettingsDialog />
    </MediaQuery>
  </div>
)

export default App


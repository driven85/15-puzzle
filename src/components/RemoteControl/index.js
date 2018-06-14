// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Switch from './Switch'

// CSS
import './styles.sass'

// Actions
import { lidOpen } from 'actions/layout/lidOpen'
import { startGame } from 'actions/puzzle'


const mapDispatchToProps = dispatch => ({
  onOpen: (e) => dispatch(lidOpen()),
  onStartGame: () => dispatch(startGame())
})

const RemoteControl = ({ onOpen, onStartGame }) => (
  <div className="remote-control">
    <Switch onChange={onOpen} />
    <button onClick={onStartGame}>Start</button>
    <button>Reset</button>
  </div>
)

export default connect(() => ({}), mapDispatchToProps)(RemoteControl)


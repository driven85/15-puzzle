// Libs
import React from 'react'
import { connect } from 'react-redux'

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
    <button onClick={onOpen}>Switch</button>
    <button onClick={onStartGame}>Start</button>
    <button>Reset</button>
  </div>
)

export default connect(() => ({}), mapDispatchToProps)(RemoteControl)


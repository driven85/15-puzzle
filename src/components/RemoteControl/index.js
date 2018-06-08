// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Actions
import { startGame } from 'actions/puzzle'


const mapDispatchToProps = dispatch => ({
  onStartGame: () => dispatch(startGame())
})

const RemoteControl = ({ onStartGame }) => (
  <div className="remote-control">
    <button>Switch</button>
    <button onClick={onStartGame}>Start</button>
    <button>Reset</button>
  </div>
)

export default connect(() => ({}), mapDispatchToProps)(RemoteControl)


// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Switch from 'components/UI/Switch'

// CSS
import './styles.sass'

// Actions
import { toggleLid } from 'actions/layout'
import { startGame } from 'actions/puzzle'


const mapStateToProps = ({ layout: { lid, startClicked } }) => ({
  resetDisabled: lid || !startClicked,
  startDisabled: lid || startClicked
})

const mapDispatchToProps = dispatch => ({
  onOpen: (e) => dispatch(toggleLid()),
  onStartGame: () => dispatch(startGame())
})

const RemoteControl = ({ 
  resetDisabled,
  startDisabled,
  onOpen, 
  onStartGame 
}) => (
  <div className="remote-control">
    <Switch onChange={onOpen} />
    <button
      disabled={startDisabled}
      onClick={onStartGame}
    >
      Start
    </button>
    <button disabled={resetDisabled}>Reset</button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(RemoteControl)


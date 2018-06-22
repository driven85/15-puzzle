// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Switch from 'components/UI/Switch'

// CSS
import './styles.sass'

// Actions
import { startGame, toggleBoxLid } from 'actions/puzzle'


const mapStateToProps = ({ layout: { lid, startClicked } }) => ({
  resetDisabled: lid || !startClicked,
  startDisabled: lid || startClicked
})

const mapDispatchToProps = dispatch => ({
  onToggleLid: (e) => { dispatch(toggleBoxLid(e.target.checked)) },
  onStartGame: () => dispatch(startGame())
})

const RemoteControl = ({ 
  resetDisabled,
  startDisabled,
  onToggleLid, 
  onStartGame 
}) => (
  <div className="remote-control">
    <Switch onChange={onToggleLid} />
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


// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import SettingsButton from './SettingsButton'
import Switch from 'components/UI/Switch'

// CSS
import './index.sass'

// Actions
import { 
  startGame, 
  resetGame, 
  toggleBoxLid 
} from 'actions/puzzle'


const mapStateToProps = ({ layout: { lid, resetDisabled, startClicked } }) => ({
  lid,
  resetDisabled,
  startDisabled: lid || startClicked
})

const mapDispatchToProps = dispatch => ({
  onResetGame: () => dispatch(resetGame()),
  onStartGame: () => dispatch(startGame()),
  onToggleLid: (e) => { dispatch(toggleBoxLid(e.target.checked)) }
})

const RemoteControl = ({
  lid,
  resetDisabled,
  startDisabled,
  onResetGame,
  onStartGame,
  onToggleLid
}) => (
  <div className="remote-control">
    <div className="button-group">
      <SettingsButton bright={!lid} />
      <Switch onChange={onToggleLid} />
    </div>
    <div className="button-group">
      <button
        disabled={startDisabled}
        onClick={onStartGame}
      >
        Start
      </button>
      <button 
        disabled={resetDisabled}
        onClick={onResetGame}
      >
        Reset
      </button>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(RemoteControl)


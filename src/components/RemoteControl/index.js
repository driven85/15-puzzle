// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Switch from 'components/UI/Switch'

// CSS
import './styles.sass'

// Actions
import { 
  startGame, 
  resetGame, 
  toggleBoxLid 
} from 'actions/puzzle'


const mapStateToProps = ({ layout: { lid, resetDisabled, startClicked } }) => ({
  resetDisabled,
  startDisabled: lid || startClicked
})

const mapDispatchToProps = dispatch => ({
  onResetGame: () => dispatch(resetGame()),
  onStartGame: () => dispatch(startGame()),
  onToggleLid: (e) => { dispatch(toggleBoxLid(e.target.checked)) }
})

const RemoteControl = ({ 
  resetDisabled,
  startDisabled,
  onResetGame,
  onStartGame,
  onToggleLid
}) => (
  <div className="remote-control">
    <Switch onChange={onToggleLid} />
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
)

export default connect(mapStateToProps, mapDispatchToProps)(RemoteControl)


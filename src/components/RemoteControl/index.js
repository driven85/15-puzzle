// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import SettingsButton from './SettingsButton'
import Switch from 'components/UI/Switch'
import { FormattedMessage } from 'react-intl'

// CSS
import './index.sass'

// Actions
import { toggleSettings } from 'actions/layout'

import { 
  startGame, 
  resetGame, 
  toggleBoxLid 
} from 'actions/puzzle'


const mapStateToProps = ({ 
  layout: { lid, resetDisabled, startClicked },
  settings: { locale }
}) => ({
  lid,
  locale,
  resetDisabled,
  startDisabled: lid || startClicked
})

const mapDispatchToProps = dispatch => ({
  onResetGame: () => dispatch(resetGame()),
  onStartGame: () => dispatch(startGame()),
  onToggleLid: (e) => dispatch(toggleBoxLid(e.target.checked)),
  onToggleSettings: () => dispatch(toggleSettings())
})

const RemoteControl = ({
  lid,
  resetDisabled,
  startDisabled,
  onResetGame,
  onStartGame,
  onToggleLid,
  onToggleSettings
}) => (
  <div className="remote-control">
    <div className="button-group">
      <SettingsButton bright={!lid} onClick={onToggleSettings} />
      <Switch onChange={onToggleLid} />
    </div>
    <div className="button-group">
      <button
        disabled={startDisabled}
        onClick={onStartGame}
      >
        <FormattedMessage id="remoteControl.start" />
      </button>
      <button 
        disabled={resetDisabled}
        onClick={onResetGame}
      >
        <FormattedMessage id="remoteControl.reset" />
      </button>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(RemoteControl)


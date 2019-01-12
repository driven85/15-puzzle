// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import Card from 'components/UI/Card'
import SettingsButton from './SettingsButton'
import Switch from 'components/UI/Switch'
import { FormattedMessage } from 'react-intl'

// CSS
import './styles.sass'

// Actions
import { toggleGameSettings } from 'actions/layout'

import { 
  resetGame, 
  startGame, 
  toggleBoxLid 
} from 'actions/game'


const buttonLabels = ['start', 'pause', 'resume']

const mapStateToProps = ({ 
  layout: { lid, resetDisabled, startClicked, startDisabled },
  settings: { locale }
}) => ({
  lid,
  locale,
  resetDisabled,
  startClicked,
  startDisabled
})

const mapDispatchToProps = dispatch => ({
  onResetGame: () => dispatch(resetGame()),
  onStartGame: () => dispatch(startGame()),
  onToggleLid: value => dispatch(toggleBoxLid(value)),
  onToggleSettings: () => dispatch(toggleGameSettings(true))
})

const RemoteControl = ({
  lid,
  resetDisabled,
  startClicked,
  startDisabled,
  onResetGame,
  onStartGame,
  onToggleLid,
  onToggleSettings
}) => (
  <Card className="remote-control">
    <div className="button-group">
      <SettingsButton bright={!lid} onClick={onToggleSettings} />
      <Switch onChange={onToggleLid} />
    </div>
    <div className="button-group">
      <button
        disabled={startDisabled}
        onClick={onStartGame}
      >
        <FormattedMessage 
          id={`remoteControl.${buttonLabels[startClicked]}`}
        />
      </button>
      <button 
        disabled={resetDisabled}
        onClick={onResetGame}
      >
        <FormattedMessage id="remoteControl.reset" />
      </button>
    </div>
  </Card>
)

RemoteControl.propTypes = {
  lid: PropTypes.bool,
  resetDisabled: PropTypes.bool,
  startClicked: PropTypes.number,
  startDisabled: PropTypes.bool,
  onResetGame: PropTypes.func.isRequired,
  onStartGame: PropTypes.func.isRequired,
  onToggleLid: PropTypes.func.isRequired,
  onToggleSettings: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoteControl)


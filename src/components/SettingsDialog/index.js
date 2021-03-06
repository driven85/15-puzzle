// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import classNames from 'classnames'

// Components
import Dialog from 'components/UI/Dialog'
import Select, { Option } from 'components/UI/Select'
import Checkbox from 'components/UI/Checkbox'

// Icons
import SoundOnSvg from 'icons/SoundOnSvg'
import SoundOffSvg from 'icons/SoundOffSvg'

// Images
import enFlag from 'images/flags/en.png'
import ruFlag from 'images/flags/ru.png'

// CSS
import './styles.sass'

// Styles
import styles from './styles'

// HOC
import withStyles from 'hoc/withStyles'

// Actions
import { toggleGameSettings } from 'actions/layout'
import { 
  switchGameLocale,
  switchGameTheme, 
  toggleGameRememberSettings,
  toggleGameSound 
} from 'actions/settings'


const mapStateToProps = ({ 
  layout: { lid, settings },
  settings: { rememberSettings, sound, theme }
}) => ({
  lid,
  rememberSettings,
  show: settings,
  sound,
  theme
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleGameSettings(false)),
  onLocaleChange: value => dispatch(switchGameLocale(value)),
  onRememberSettingsChange: value => dispatch(toggleGameRememberSettings(value)),
  onSoundChange: value => dispatch(toggleGameSound(value)),
  onThemeChange: value => dispatch(switchGameTheme(value))
})

const SettingsDialog = ({
  intl: { formatMessage, locale },
  lid,
  rememberSettings,
  show, 
  sound,
  styles,
  theme,
  onClose, 
  onLocaleChange,
  onRememberSettingsChange,
  onSoundChange,
  onThemeChange
}) => (
  <Dialog
    bright={!lid}
    className="settings-dialog"
    contentStyle={styles.content}
    header
    headerStyle={styles.header}
    mainStyle={styles.main}
    show={show} 
    title={formatMessage({ id: 'settingsDialog.settings' })}
    onClose={onClose} 
  >
    <Select 
      bright={!lid}
      className="lang-switcher"
      style={styles.select}
      value={locale}
      onChange={onLocaleChange}
    >
      <Option
        icon={<img src={enFlag} />}
        value="en"
      >
        English
      </Option>
      <Option 
        icon={<img src={ruFlag} />}
        value="ru"
      >
        Русский
      </Option>
    </Select>
    <Select
      bright={!lid}
      className="theme-switcher"
      style={styles.select}
      value={theme}
      onChange={onThemeChange}
    >
      <Option value="pink-grey">
        {/* TODO: fix a bug with FormattedMessage */}
        {formatMessage({ id: 'settingsDialog.pinkGrey' })}
      </Option>
      <Option value="green-brown">
        {formatMessage({ id: 'settingsDialog.greenBrown' })}
      </Option>
      <Option value="turquoise-blue">
        {formatMessage({ id: 'settingsDialog.turquoiseBlue' })}
      </Option>
    </Select>
    <Checkbox 
      bright={!lid}
      checked={sound}
      checkedIcon={<SoundOnSvg className={classNames({ drab: lid, bright: !lid })}/>}
      className="sound-checkbox"
      iconStyle={styles.icon}
      label={formatMessage({ id: 'settingsDialog.sound' })}
      style={styles.checkbox}
      uncheckedIcon={<SoundOffSvg className={classNames({ drab: lid, bright: !lid })} />}
      onChange={onSoundChange}
    />
    <Checkbox 
      bright={!lid}
      checked={rememberSettings}
      checkmarkStyle={styles.checkmark}
      className="remember-checkbox"
      label={formatMessage({ id: 'settingsDialog.rememberSettings' })}
      style={styles.checkbox}
      onChange={onRememberSettingsChange}
    />
  </Dialog>
)

SettingsDialog.propTypes = {
  intl: PropTypes.object,
  lid: PropTypes.bool,
  rememberSettings: PropTypes.bool,
  show: PropTypes.bool,
  sound: PropTypes.bool,
  styles: PropTypes.object,
  theme: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  onRememberSettingsChange: PropTypes.func.isRequired,
  onSoundChange: PropTypes.func.isRequired,
  onThemeChange: PropTypes.func.isRequired
}

export default injectIntl(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )(withStyles(SettingsDialog, styles))
)


// Libs
import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'

// Components
import Dialog from 'components/UI/Dialog'
import Select, { Option } from 'components/UI/Select'
import Checkbox from 'components/UI/Checkbox'

// Images
import enFlag from 'images/flags/en.png'
import ruFlag from 'images/flags/ru.png'

// CSS
import './styles.sass'

// Styles
import styles from './styles'

// Helpers
import { getStyle } from 'helpers/styles'

// Actions
import { toggleSettings } from 'actions/layout'
import { switchLocale, switchGameTheme, toggleSound } from 'actions/settings'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'


const mapStateToProps = ({ 
  layout: { lid, settings },
  settings: { sound, theme }
}) => ({
  lid,
  show: settings,
  sound,
  theme
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSettings(false)),
  onLocaleChange: value => dispatch(switchLocale(value)),
  onSoundChange: value => { dispatch(toggleSound(value)) },
  onThemeChange: value => dispatch(switchGameTheme(value))
})

// TODO: implement with a hoc

const SettingsDialog = ({
  intl: { formatMessage, locale },
  lid,
  show, 
  sound,
  theme,
  onClose, 
  onLocaleChange,
  onSoundChange,
  onThemeChange
}) => (
  <MediaQueryContext.Consumer>
    {({ layout }) =>
      <Dialog
        bright={!lid}
        className="settings-dialog"
        contentStyle={getStyle(styles, layout, 'content')}
        header
        headerStyle={getStyle(styles, layout, 'header')}
        mainStyle={getStyle(styles, layout, 'main')}
        show={show} 
        title={formatMessage({ id: 'settingsDialog.settings' })}
        onClose={onClose} 
      >
        <Select 
          bright={!lid}
          className="lang-switcher"
          style={getStyle(styles, layout, 'select')}
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
          style={getStyle(styles, layout, 'select')}
          value={theme}
          onChange={onThemeChange}
        >
          <Option
            value="pink-grey"
          >
            {/* TODO: fix a bug with FormattedMessage */}
            {formatMessage({ id: 'settingsDialog.pinkGrey' })}
          </Option>
          <Option
            value="green-brown"
          >
            {formatMessage({ id: 'settingsDialog.greenBrown' })}
          </Option>
        </Select>
        <Checkbox 
          bright={!lid}
          checked={sound}
          checkmarkStyle={getStyle(styles, layout, 'checkmark')}
          className="sound-checkbox"
          label={formatMessage({ id: 'settingsDialog.sound' })}
          style={getStyle(styles, layout, 'checkbox')}
          onChange={onSoundChange}
        />
        <Checkbox 
          bright={!lid}
          checkmarkStyle={getStyle(styles, layout, 'checkmark')}
          className="remember-checkbox"
          label={formatMessage({ id: 'settingsDialog.rememberSettings' })}
          style={getStyle(styles, layout, 'checkbox')}
        />
      </Dialog>
    }
  </MediaQueryContext.Consumer>
)

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(SettingsDialog)
)


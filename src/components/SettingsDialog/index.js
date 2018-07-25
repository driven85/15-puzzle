// Libs
import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

// Components
import Dialog from 'components/UI/Dialog'
import Select, { Option } from 'components/UI/Select'

// Images
import enFlag from 'images/flags/en.png'
import ruFlag from 'images/flags/ru.png'

// CSS
import './styles.sass'

// Styles
import styles, { getStyle } from './styles'

// Actions
import { toggleSettings } from 'actions/layout'
import { switchLocale, switchTheme } from 'actions/settings'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'


const mapStateToProps = ({ 
  layout: { lid, settings },
  settings: { theme }
}) => ({
  lid,
  show: settings,
  theme
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSettings(false)),
  onLocaleChange: value => dispatch(switchLocale(value)),
  onThemeChange: value => dispatch(switchTheme(value))
})

const SettingsDialog = ({
  intl: { formatMessage, locale },
  lid,
  show, 
  theme,
  onClose, 
  onLocaleChange,
  onThemeChange
}) => (
  <MediaQueryContext.Consumer>
    {({ layout }) =>
      <Dialog
        bright={!lid}
        className="settings-dialog"
        contentStyle={getStyle(layout, 'content')}
        header
        headerStyle={getStyle(layout, 'header')}
        mainStyle={getStyle(layout, 'main')}
        show={show} 
        title={formatMessage({ id: 'settingsDialog.settings' })}
        onClose={onClose} 
      >
        <Select 
          bright={!lid}
          className="lang-switcher"
          style={getStyle(layout, 'select')}
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
          style={getStyle(layout, 'select')}
          value={theme}
          onChange={onThemeChange}
        >
          <Option
            value="red-grey"
          >
            Red grey
          </Option>
        </Select>
      </Dialog>
    }
  </MediaQueryContext.Consumer>
)

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(SettingsDialog)
)


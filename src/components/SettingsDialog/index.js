// Libs
import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

// Components
import Dialog from 'components/UI/Dialog'

// CSS
import './styles.sass'

// Images
import enFlag from 'images/flags/en.png'
import ruFlag from 'images/flags/ru.png'

// Actions
import { toggleSettings } from 'actions/layout'
import { switchLocale } from 'actions/settings'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'


const dialogSizes = {
  'xs': { width: 300, height: 300 },
  'sm': { width: 300, height: 300 },
  'md': { width: 500, height: 350 },
  'lg': { width: 600, height: 450 }
}

const mapStateToProps = ({ 
  layout: { settings }
}) => ({
  show: settings
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSettings()),
  onLocaleChange: (e) => dispatch(switchLocale(e.target.value))
})

const SettingsDialog = ({
  intl: { formatMessage, locale },
  show, 
  onClose, 
  onLocaleChange 
}) => (
  <MediaQueryContext.Consumer>
    {({ layout }) =>
      <Dialog
        width={dialogSizes[layout].width}
        height={dialogSizes[layout].height}
        header
        title={formatMessage({ id: 'settingsDialog.settings' })}
        show={show} 
        onClose={onClose} 
      >
        <select 
          className="lang-switcher"
          value={locale}
          onChange={onLocaleChange}
        >
          <option 
            value="en"
            style={{ backgroundImage: enFlag }}
          >
            English
          </option>
          <option value="ru">Русский</option>
        </select>
      </Dialog>
    }
  </MediaQueryContext.Consumer>
)

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(SettingsDialog)
)


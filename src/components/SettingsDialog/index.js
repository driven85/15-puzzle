// Libs
import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

// Components
import Dialog from 'components/UI/Dialog'
import Select from 'components/UI/Select'
import Option from 'components/UI/Option'

// Images
import enFlag from 'images/flags/en.png'
import ruFlag from 'images/flags/ru.png'

// CSS
import './styles.sass'

// Styles
import styles from './styles'

// Actions
import { toggleSettings } from 'actions/layout'
import { switchLocale } from 'actions/settings'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'


const mapStateToProps = ({ 
  layout: { lid, settings }
}) => ({
  lid,
  show: settings
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSettings(false)),
  onLocaleChange: value => dispatch(switchLocale(value))
})

const SettingsDialog = ({
  intl: { formatMessage, locale },
  lid,
  show, 
  onClose, 
  onLocaleChange 
}) => (
  <MediaQueryContext.Consumer>
    {({ layout }) =>
      <Dialog
        contentStyle={{
          ...styles[layout].content,
          ...(lid ? {} : { color: '#EC7063' }) // TODO: take the colour from the current theme
        }}
        header
        headerStyle={styles[layout].header}
        mainStyle={styles[layout].main}
        show={show} 
        title={formatMessage({ id: 'settingsDialog.settings' })}
        onClose={onClose} 
      >
        <Select 
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
      </Dialog>
    }
  </MediaQueryContext.Consumer>
)

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(SettingsDialog)
)


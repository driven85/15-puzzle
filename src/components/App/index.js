// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'

// Components
import Display from 'components/Display'
import Game from 'components/Game'
import MediaQuery from 'components/MediaQuery'
import RemoteControl from 'components/RemoteControl'
import SettingsDialog from 'components/SettingsDialog'

// CSS
import './styles.sass'

// I18n
import i18n from 'i18n'


const App = ({ locale }) => (
  <div className="app">
    <IntlProvider locale={locale} messages={i18n[locale]}>
      <MediaQuery>
        <Display />
        <Game />
        <RemoteControl />
        <SettingsDialog />
      </MediaQuery>
    </IntlProvider>
  </div>
)

App.propTypes = {
  locale: PropTypes.string.isRequired
}

App.defaultProps = {
  locale: 'en'
}

export default App


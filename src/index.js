// Libs
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Components
import App from 'components/App'

// CSS
import 'css/styles.sass'

// Store
import configureStore from 'configureStore'

// Settings
import loadSettings from 'loadSettings'

// Helpers
import { applyTheme } from 'helpers/theme'

// Themes
import themes from 'css/themes.json'


const settings = loadSettings()
const store = configureStore({ settings })
applyTheme(themes[settings.theme])

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.log('15 Puzzle')


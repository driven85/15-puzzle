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


const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.log('15 Puzzle')


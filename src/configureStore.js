// Libs
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from 'reducers'


const loggerMiddleware = createLogger()

const configureStore = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    ) 
  ) 
}

export default configureStore


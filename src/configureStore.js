// Libs
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

// Reducer
import reducer from 'reducers'


const loggerMiddleware = createLogger()

const configureStore = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        loggerMiddleware
      )
    ) 
  ) 
}

export default configureStore


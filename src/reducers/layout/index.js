// Libs
import { combineReducers } from 'redux'

// Layout reducers
import lidOpen from './lidOpen'
import startClicked from './startClicked'


const layout = combineReducers({
  lidOpen,
  startClicked
})

export default layout


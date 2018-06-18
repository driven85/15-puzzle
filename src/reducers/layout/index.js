// Libs
import { combineReducers } from 'redux'

// Layout reducers
import lidOpen from './lidOpen'
import loader from './loader'
import startClicked from './startClicked'


const layout = combineReducers({
  lidOpen,
  loader,
  startClicked
})

export default layout


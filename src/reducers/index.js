// Libs
import { combineReducers } from 'redux'

// Reducers
import display from './display'
import layout from './layout'
import puzzle from './puzzle'
import settings from './settings'


const reducer = combineReducers({
  display,
  layout,
  puzzle,
  settings
})

export default reducer


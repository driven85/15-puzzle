// Libs
import { combineReducers } from 'redux'

// Reducers
import display from './display'
import layout from './layout'
import puzzle from './puzzle'


const reducer = combineReducers({
  display,
  layout,
  puzzle
})

export default reducer


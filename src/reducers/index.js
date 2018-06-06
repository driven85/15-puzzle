// Libs
import { combineReducers } from 'redux'

// Reducers
import layout from './layout'
import puzzle from './puzzle'


const reducer = combineReducers({
  layout,
  puzzle
})

export default reducer


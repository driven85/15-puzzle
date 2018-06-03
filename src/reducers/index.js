// Libs
import { combineReducers } from 'redux'

// Reducers
import layout from './layout'
import tiles from './tiles'


const reducer = combineReducers({
  layout,
  tiles
})

export default reducer


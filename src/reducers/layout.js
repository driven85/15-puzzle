// Action types
import { LID_OPEN, SET_LOADER, START_CLICKED } from 'actions/layout'


const initialState = {
  lidOpen: false,
  loader: false,
  startClicked: false
}

const layout = (state = initialState, action) => {
  switch (action.type) {
    case LID_OPEN:
      return {
        ...state,
        lidOpen: true
      }

    case SET_LOADER:
      const { loader } = action.payload

      return { 
        ...state,
        loader
      }

    case START_CLICKED:
      const { clicked } = action.payload

      return {
        ...state,
        startClicked: clicked
      }

    default:
      return state
  }
}

export default layout


// Action types
import { RESET } from 'actions/common'
import { 
  TOGGLE_LID, 
  SET_LOADER, 
  START_CLICKED,
  SET_SOLVED,
  SHAKE_TILE,
  ENABLE_RESET,
  TOGGLE_SETTINGS
} from 'actions/layout'


const initialState = {
  lid: true,
  loader: false,
  resetDisabled: true,
  settings: false,
  shake: null,
  solved: false,
  startClicked: false
}

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LID:
      return { 
        ...state, 
        lid: !state.lid,
        resetDisabled: true,
        solved: false,
        startClicked: false
      }

    case SET_LOADER:
      const { loader } = action.payload

      return { ...state, loader }

    case START_CLICKED:
      return { ...state, startClicked: true }

    case SET_SOLVED:
      return { ...state, solved: true }

    case RESET:
      return {
        ...state,
        resetDisabled: true,
        solved: false,
        startClicked: false
      }

    case SHAKE_TILE:
      const { tile } = action.payload

      return { ...state, shake: tile }

    case ENABLE_RESET:
      return { ...state, resetDisabled: false }

    case TOGGLE_SETTINGS:
      const { settings } = action.payload

      return { ...state, settings }

    default:
      return state
  }
}

export default layout


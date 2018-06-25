// Action types
import { 
  TOGGLE_LID, 
  SET_LOADER, 
  START_CLICKED,
  SET_SOLVED,
  RESET,
  SHAKE_TILE,
  ENABLE_RESET
} from 'actions/layout'


const initialState = {
  lid: true,
  loader: false,
  resetDisabled: true,
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

    default:
      return state
  }
}

export default layout


// Action types
import { RESET } from 'actions/common'
import { 
  TOGGLE_LID, 
  SET_LOADER, 
  START_CLICKED,
  SET_SOLVED,
  SHAKE_TILE,
  ENABLE_RESET,
  TOGGLE_SETTINGS,
  SET_START_DISABLED,
  TOGGLE_CHEATING_WARNING
} from 'actions/layout'


const initialState = {
  cheatingWarning: false,
  lid: true,
  loader: false,
  resetDisabled: true,
  settings: false,
  shake: null,
  solved: false,
  startClicked: 0,
  startDisabled: true
}

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LID:
      return { 
        ...state,
        cheatingWarning: false,
        lid: !state.lid,
        resetDisabled: true,
        solved: false,
        startClicked: 0,
        startDisabled: !state.lid
      }

    case SET_LOADER:
      const { loader } = action.payload

      return { ...state, loader }

    case START_CLICKED:
      let newBtnState = state.startClicked + 1

      if (newBtnState === 3) newBtnState = 1

      return { ...state, startClicked: newBtnState }

    case SET_SOLVED:
      return { ...state, solved: true }

    case RESET:
      return {
        ...state,
        cheatingWarning: false,
        resetDisabled: true,
        solved: false,
        startClicked: 0,
        startDisabled: false
      }

    case SHAKE_TILE:
      const { tile } = action.payload

      return { ...state, shake: tile }

    case ENABLE_RESET:
      return { ...state, resetDisabled: false }

    case TOGGLE_SETTINGS:
      const { settings } = action.payload

      return { ...state, settings }

    case SET_START_DISABLED:
      const { disabled } = action.payload

      return { ...state, startDisabled: disabled }

    case TOGGLE_CHEATING_WARNING:
      const { toggle } = action.payload

      return { ...state, cheatingWarning: toggle }

    default:
      return state
  }
}

export default layout


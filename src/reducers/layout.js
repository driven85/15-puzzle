// Action types
import { 
  TOGGLE_LID, 
  SET_LOADER, 
  START_CLICKED,
  SET_SOLVED,
  RESET
} from 'actions/layout'


const initialState = {
  lid: true,
  loader: false,
  solved: false,
  startClicked: false
}

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LID:
      return { 
        ...state, 
        lid: !state.lid,
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
        solved: false,
        startClicked: false
      }

    default:
      return state
  }
}

export default layout


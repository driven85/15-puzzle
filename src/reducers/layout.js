// Action types
import { TOGGLE_LID, SET_LOADER, START_CLICKED } from 'actions/layout'


const initialState = {
  lid: true,
  loader: false,
  startClicked: false
}

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LID:
      return { 
        ...state, 
        lid: !state.lid,
        startClicked: false
      }

    case SET_LOADER:
      const { loader } = action.payload

      return { ...state, loader }

    case START_CLICKED:
      const { clicked } = action.payload

      return { ...state, startClicked: clicked }

    default:
      return state
  }
}

export default layout


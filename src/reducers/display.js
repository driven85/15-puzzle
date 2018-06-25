import { 
  INCREMENT_MOVES,
  RESET_DISPLAY
} from 'actions/display'

import { TOGGLE_LID } from 'actions/layout'


const initialState = {
  moves: 0,
  time: 0
}

const display = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_MOVES:
      return { ...state, moves: state.moves + 1 }

    case RESET_DISPLAY:
    case TOGGLE_LID:
      return initialState

    default:
      return state
  }
}

export default display


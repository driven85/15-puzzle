import { RESET } from 'actions/common'
import { 
  INCREMENT_MOVES,
  TICK
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

    case RESET:
    case TOGGLE_LID:
      return initialState

    case TICK:
      // TODO: should be the difference between the current time and previous time
      return { ...state, time: state.time + 1 } 

    default:
      return state
  }
}

export default display


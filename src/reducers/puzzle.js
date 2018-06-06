import { SET_PUZZLE } from 'actions/puzzle'


const initialState = 
  [...Array.from(new Array(15), (val, ind) => ind + 1), 0]

const puzzle = (state = initialState, action) => {
  switch (action.type) {
    case SET_PUZZLE: {
      return action.payload.puzzle
    } 

    default:
      return state
  }
}

export default puzzle


// App
import Puzzle from 'app/Puzzle'
import Shuffler from 'app/Shuffler'

// Actions
import { 
  setLoader, 
  startClicked, 
  toggleLid,
  setSolved,
  reset
} from 'actions/layout'


const PUZZLE = new Puzzle()
window.PUZZLE = PUZZLE

export const SET_PUZZLE = 'SET_PUZZLE'


const setPuzzle = puzzle => ({
  type: SET_PUZZLE,
  payload: { puzzle }
})

export const toggleBoxLid = toggle => dispatch => {
  if (toggle) {
    PUZZLE.reset()
    dispatch(setPuzzle(PUZZLE.currentState()))
  }
  dispatch(toggleLid())
}

export const startGame = () => dispatch => {
  dispatch(setLoader(true))
  dispatch(startClicked())

  PUZZLE.reset()

  // Shuffle the puzzle
  const N = 200
  const shuffler = new Shuffler(PUZZLE)
  shuffler.shuffle(N)

  // Display the shuffling
  const shuffledStates = PUZZLE.allStates();
  (function display(n) {
    setTimeout(() => {
      dispatch(setPuzzle(shuffledStates[n]))

      if (n++ < N) {
        if (n < N) n++
        display(n)
      } else { 
        dispatch(setLoader(false))
      }
    }, 5)
  })(1)
  
  // Start timer
}

export const moveTile = tile => (dispatch, getState) => {
  if (PUZZLE.moveTile(tile)) {
    dispatch(setPuzzle(PUZZLE.currentState()))

    if (PUZZLE.isSolved()) {
      const { layout: { startClicked } } = getState()

      if (startClicked) {
        dispatch(setSolved())
      }
    }
  } else {
    // Shake
  }
}

export const resetGame = () => dispatch => {
  PUZZLE.reset()
  dispatch(setPuzzle(PUZZLE.currentState()))
  dispatch(reset())
}


// TODO: refactor
// TODO: helper for resetting

// App
import Puzzle from 'app/Puzzle'
import Shuffler from 'app/Shuffler'

// Actions
import { 
  setLoader, 
  startClicked, 
  toggleLid,
  setSolved,
  reset,
  shakeTile,
  enableReset
} from 'actions/layout'

import { incrementMoves, resetDisplay, tick } from 'actions/display'


const PUZZLE = new Puzzle()

let timer = null

export const SET_PUZZLE = 'SET_PUZZLE'

const setPuzzle = puzzle => ({
  type: SET_PUZZLE,
  payload: { puzzle }
})

export const toggleBoxLid = toggle => dispatch => {
  if (toggle) {
    PUZZLE.reset()
    dispatch(setPuzzle(PUZZLE.currentState()))
  } else {
    clearInterval(timer)
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
        dispatch(enableReset())
        timer = setInterval(() => dispatch(tick()), 1000)
      }
    }, 5)
  })(1)
}

export const moveTile = tile => (dispatch, getState) => {
  if (PUZZLE.moveTile(tile)) {
    dispatch(setPuzzle(PUZZLE.currentState()))

    const { layout: { startClicked } } = getState()

    if (startClicked) {
      dispatch(incrementMoves())

      if (PUZZLE.isSolved()) {
        dispatch(setSolved())
      }
    }
  } else {
    dispatch(shakeTile(tile))
    setTimeout(() => dispatch(shakeTile(null)), 300)
  }
}

export const resetGame = () => dispatch => {
  PUZZLE.reset()
  dispatch(setPuzzle(PUZZLE.currentState()))
  // TODO: do though a single action
  dispatch(reset()) 
  dispatch(resetDisplay())
  clearInterval(timer)
}


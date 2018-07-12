// TODO: refactor

// App
import Puzzle from 'app/Puzzle'
import Shuffler from 'app/Shuffler'

// Actions
import { 
  setLoader, 
  startClicked, 
  toggleLid,
  setSolved,
  shakeTile,
  enableReset
} from 'actions/layout'

import { incrementMoves, tick } from 'actions/display'


const PUZZLE = new Puzzle()

let timer = null

export const RESET = 'RESET'
export const SET_PUZZLE = 'SET_PUZZLE'


const reset = () => ({
  type: RESET
})

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
        clearInterval(timer)
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
  dispatch(reset())
  clearInterval(timer)
}


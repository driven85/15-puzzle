// App
import Puzzle from 'app/Puzzle'
import Shuffler from 'app/Shuffler'

// Actions
import { reset } from 'actions/common'
import { incrementMoves, tick } from 'actions/display'
import { 
  enableReset,
  setLoader, 
  setSolved,
  shakeTile,
  setStartDisabled,
  startClicked, 
  toggleLid,
  toggleCheatingWarning
} from 'actions/layout'
import { setPuzzle } from 'actions/puzzle'


const PUZZLE = new Puzzle()

let timer = null
let cheatingMoves = 0
let lidClosed = false

export const toggleBoxLid = toggle => dispatch => {
  if (toggle) {
    PUZZLE.reset()
    dispatch(setPuzzle(PUZZLE.currentState()))
    lidClosed = false
  } else {
    clearInterval(timer)
    cheatingMoves = 0
    lidClosed = true
  }
  dispatch(toggleLid())
}

export const startGame = () => (dispatch, getState) => {
  const START  = 0,
        PAUSE  = 1,
        RESUME = 2

  const { layout: { startClicked: currBtnState } } = getState()

  switch (currBtnState) {
    case START:
      dispatch(setLoader(true))
      dispatch(setStartDisabled(true)) // TODO: disable through the START_CLICKED action - ?

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
            if (!lidClosed) {
              dispatch(startClicked())
              // TODO: enable through a singe action - ?
              dispatch(setStartDisabled(false))
              dispatch(enableReset())
              timer = setInterval(() => dispatch(tick()), 1000)
            }
          }
        }, 5)
      })(1)

      break

    case PAUSE:
      dispatch(startClicked())
      clearInterval(timer)
      cheatingMoves = 0

      break

    case RESUME:
      dispatch(startClicked())
      timer = setInterval(() => dispatch(tick()), 1000)

      break
  }
}

// TODO: refactor
export const moveTile = tile => (dispatch, getState) => {
  const { layout: { startClicked } } = getState()

  if (startClicked === 2) { // the game is paused
    dispatch(shakeTile(tile))
    setTimeout(() => dispatch(shakeTile(null)), 300)

    if (PUZZLE.moveTile(tile)) {
      if (++cheatingMoves >= 3) {
        cheatingMoves = 0
        dispatch(toggleCheatingWarning(true))
      }

      dispatch(setPuzzle(PUZZLE.currentState()))
      setTimeout(() => {
        PUZZLE.moveTile(tile)
        dispatch(setPuzzle(PUZZLE.currentState()))
      }, 150)
    }
  } else {
    if (cheatingMoves > 0) cheatingMoves = 0

    if (PUZZLE.moveTile(tile)) {
      dispatch(setPuzzle(PUZZLE.currentState()))

      if (startClicked) {
        dispatch(incrementMoves())

        if (PUZZLE.isSolved()) {
          dispatch(setStartDisabled(true))
          dispatch(setSolved())
          clearInterval(timer)
        }
      }
    } else {
      dispatch(shakeTile(tile))
      setTimeout(() => dispatch(shakeTile(null)), 300)
    }
  }
}

export const resetGame = () => dispatch => {
  PUZZLE.reset()
  dispatch(setPuzzle(PUZZLE.currentState()))
  dispatch(reset())
  clearInterval(timer)
  cheatingMoves = 0
}


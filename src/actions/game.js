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
  toggleLid
} from 'actions/layout'
import { setPuzzle } from 'actions/puzzle'


const PUZZLE = new Puzzle()

let timer = null

export const toggleBoxLid = toggle => dispatch => {
  if (toggle) {
    PUZZLE.reset()
    dispatch(setPuzzle(PUZZLE.currentState()))
  } else {
    clearInterval(timer)
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
            dispatch(startClicked())
            // TODO: enable through a singe action - ?
            dispatch(setStartDisabled(false))
            dispatch(enableReset())
            timer = setInterval(() => dispatch(tick()), 1000)
          }
        }, 5)
      })(1)

      break

    case PAUSE:
      dispatch(startClicked())
      clearInterval(timer)

      break

    case RESUME:
      dispatch(startClicked())
      timer = setInterval(() => dispatch(tick()), 1000)

      break
  }
}

export const moveTile = tile => (dispatch, getState) => {
  if (PUZZLE.moveTile(tile)) {
    dispatch(setPuzzle(PUZZLE.currentState()))

    const { layout: { startClicked } } = getState()

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

export const resetGame = () => dispatch => {
  PUZZLE.reset()
  dispatch(setPuzzle(PUZZLE.currentState()))
  dispatch(reset())
  clearInterval(timer)
}


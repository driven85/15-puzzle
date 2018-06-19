// App
import Puzzle from 'app/Puzzle'
import Shuffler from 'app/Shuffler'

// Actions
import { setLoader, startClicked } from 'actions/layout'


const PUZZLE = new Puzzle()

export const SET_PUZZLE = 'SET_PUZZLE'


export const setPuzzle = puzzle => ({
  type: SET_PUZZLE,
  payload: { puzzle }
})

export const startGame = () => dispatch => {
  dispatch(setLoader(true))
  dispatch(startClicked(true))

  // Shuffle the puzzle
  const N = 50
  const shuffler = new Shuffler(PUZZLE)
  shuffler.shuffle(N)

  // Display the shuffling
  const shuffledStates = PUZZLE.allStates();
  (function display(n) {
    setTimeout(() => {
      dispatch(setPuzzle(shuffledStates[n]))

      if (n++ < N) {
        display(n)
      } else { 
        dispatch(setLoader(false))
      }
    }, 30)
  })(1)
  
  // Start timer
}


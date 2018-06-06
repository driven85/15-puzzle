import Puzzle from 'app/Puzzle'
import Shuffler from 'app/Shuffler'


const PUZZLE = new Puzzle()

export const SET_PUZZLE = 'SET_PUZZLE'


export const setPuzzle = puzzle => ({
  type: SET_PUZZLE,
  payload: { puzzle }
})

export const startGame = () => dispatch => {
  // Show loader

  // Shuffle the puzzle
  const N = 20
  const shuffler = new Shuffler(PUZZLE)
  shuffler.shuffle(N)

  // Display the shuffling
  const shuffledStates = PUZZLE.allStates();
  (function display(n) {
    setTimeout(() => {
      dispatch(setPuzzle(shuffledStates[n]))
      if (n++ < N) display(n)
    }, 200)
  })(1)

  // Hide loader
  
  // Start timer
}


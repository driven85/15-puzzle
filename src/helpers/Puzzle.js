const initialState = [...Array.from(new Array(15), (v, i) => i + 1), 0]

function Puzzle(puzzle = initialState) {
  this._puzzleStates = [puzzle]
}

Puzzle.prototype = {
  currentState: function() {
    return this._puzzleStates[this._puzzleStates.length - 1]
  },

  getMovableTiles:  function() {
    const movableTiles = []
    const puzzle = this.currentState()
    const emptySpaceInd = puzzle.indexOf(0)
    
    movableTiles.push(puzzle[emptySpaceInd - 4])
    if (![0, 4, 8, 12].includes(emptySpaceInd)) {
      movableTiles.push(puzzle[emptySpaceInd - 1]) 
    }
    if (![3, 7, 11, 15].includes(emptySpaceInd)) {
      movableTiles.push(puzzle[emptySpaceInd + 1])
    }
    movableTiles.push(puzzle[emptySpaceInd + 4]) 

    return movableTiles.filter(t => t)
  },

  moveTile: function(tile) {
    if (!this.getMovableTiles().includes(tile)) 
      return false

    const puzzle = this.currentState().slice()
    const tileInd = puzzle.indexOf(tile)
    const emptySpaceInd = puzzle.indexOf(0)

    puzzle[tileInd] = 0
    puzzle[emptySpaceInd] = tile

    this._puzzleStates.push(puzzle)

    return true
  },

  isSolvable: function() {
    const puzzle = this.currentState()

    const countInversions = () => {
      let count = 0

      for (let i = 0; i < puzzle.length - 1; i++) {
        if (!puzzle[i]) continue

        for(let j = i + 1; j < puzzle.length; j++) {
          if (!puzzle[j]) continue
          if (puzzle[i] > puzzle[j]) count++  
        }
      }

      return count
    }

    const positionOfEmptySpaceFromBottom = () => {
      const p = puzzle.slice().reverse()
      const emptySpaceInd = p.indexOf(0)

      return Math.floor(emptySpaceInd / 4) + 1      
    }

    const isEven = n => !(n & 1) 
    const isOdd = n => !!(n & 1)

    const pos = positionOfEmptySpaceFromBottom()
    const count = countInversions(puzzle)

    return isEven(pos) && isOdd(count) || 
      isOdd(pos) && isEven(count)
  },

  reset: function() {
    this._puzzleStates = [initialState]
  }

  // shuffle: function() {
  //   while (this._shuffles--) {
  //     const movableTiles = this._getMovableTiles()
  //     const tile = Shuffler.pickRandomTile(movableTiles)
  //     const newState = this._moveTile(tile)
  //     this._puzzleStates.push(newState)
  //   }
  // }
}

// Shuffler.pickRandomTile = function(tiles) {
//   return tiles[Math.floor(Math.random() * tiles.length)]
// }

export default Puzzle


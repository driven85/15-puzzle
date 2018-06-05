function Shuffler(tiles, shuffles = 10) {
  this._tiles = tiles
  this._shuffles = shuffles
  this._states = []
}

Shuffler.prototype = {
  _getMovableTiles:  function() {
    const movableTiles = []
    const emptySpaceInd = this._tiles.indexOf(0)
    
    movableTiles.push(this._tiles[emptySpaceInd - 4])
    if (![0, 4, 8, 12].includes(emptySpaceInd)) {
      movableTiles.push(this._tiles[emptySpaceInd - 1]) 
    }
    if (![3, 7, 11, 15].includes(emptySpaceInd)) {
      movableTiles.push(this._tiles[emptySpaceInd + 1])
    }
    movableTiles.push(this._tiles[emptySpaceInd + 4]) 

    return movableTiles.filter(t => t)
  },

  _moveTile: function(tile) {
    const tiles = this._tiles.slice()
    const tileInd = tiles.indexOf(tile)
    const emptySpaceInd = tiles.indexOf(0)

    tiles[tileInd] = 0
    tiles[emptySpaceInd] = tile

    return tiles
  },

  shuffle: function() {
    while (this._shuffles--) {
      const movableTiles = this._getMovableTiles()
      const tile = Shuffler.pickRandomTile(movableTiles)
      const newState = this._moveTile(tile)
      this._states.push(newState)
    }
  }
}

Shuffler.pickRandomTile = function(tiles) {
  return tiles[Math.floor(Math.random() * tiles.length)]
}

export default Shuffler


function Shuffler(tiles, shuffles = 10) {
  this.tiles = tiles
  this.shuffles = shuffles
  this.states = []
}

Shuffler.prototype.getMovableTiles = function() {
  const movableTiles = []
  const emptySpaceInd = this.tiles.indexOf(0)
  
  movableTiles.push(this.tiles[emptySpaceInd - 4])
  if (![0, 4, 8, 12].includes(emptySpaceInd)) {
    movableTiles.push(this.tiles[emptySpaceInd - 1]) 
  }
  if (![3, 7, 11, 15].includes(emptySpaceInd)) {
    movableTiles.push(this.tiles[emptySpaceInd + 1])
  }
  movableTiles.push(this.tiles[emptySpaceInd + 4]) 

  return movableTiles.filter(t => t)
}

Shuffler.chooseRandomTile = function(tiles) {
  return tiles[Math.floor(Math.random() * tiles.length)]
}

Shuffler.prototype.moveTile = function(tile) {
  const tiles = this.tiles.slice()
  const tileInd = tiles.indexOf(tile)
  const emptySpaceInd = tiles.indexOf(0)

  tiles[tileInd] = 0
  tiles[emptySpaceInd] = tile

  return tiles
}

Shuffler.prototype.shuffle = function() {
  while (this.shuffles--) {
    const movableTiles = this.getMovableTiles()
    const tile = Shuffler.chooseRandomTile(movableTiles)
    const newState = this.moveTile(tile)
    this.states.push(newState)
  }
}

export default Shuffler


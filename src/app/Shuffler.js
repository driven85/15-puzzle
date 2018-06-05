function Shuffler(puzzle) {
  this._puzzle = puzzle 
}

Shuffler.prototype.shuffle = function(n) {
  while (n--) {
    const movableTiles = this._puzzle.getMovableTiles()
    const tile = Shuffler.pickRandomTile(movableTiles)
    this._puzzle.moveTile(tile)
  } 
}

Shuffler.pickRandomTile = tiles =>
  tiles[Math.floor(Math.random() * tiles.length)]

export default Shuffler


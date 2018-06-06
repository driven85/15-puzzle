function Shuffler(puzzle) {
  this._puzzle = puzzle 
}

Shuffler.prototype.shuffle = function(n) {
  let tile

  while (n--) {
    const movableTiles = this._puzzle.getMovableTiles()
    tile = Shuffler.pickRandomTile(movableTiles.filter(t => t !== tile))
    this._puzzle.moveTile(tile)
  } 
}

Shuffler.pickRandomTile = tiles =>
  tiles[Math.floor(Math.random() * tiles.length)]

export default Shuffler


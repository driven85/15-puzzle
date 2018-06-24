import test from 'tape'
import Shuffler from './Shuffler'
import sinon from 'sinon'


test('Shuffler.prototype.shuffle', t => {
  const puzzle = {
    getMovableTiles: () => [],
    moveTile: () => {}
  }

  const getMovableTiles = sinon.spy(puzzle, 'getMovableTiles')
  const pickRandomTile = sinon.stub(Shuffler, 'pickRandomTile')
  const moveTile = sinon.spy(puzzle, 'moveTile')

  const shuffler = new Shuffler(puzzle)
  shuffler.shuffle(3)

  t.equal(getMovableTiles.callCount, 3,
    'Should call puzzle.getMovableTiles 3 times')
  t.equal(pickRandomTile.callCount, 3,
    'Should call Shuffle.pickRandomTile 3 times')
  t.equal(moveTile.callCount, 3,
    'Should call puzzle.moveTile 3 times')

  pickRandomTile.restore()
 
  t.end() 
})

test('Shuffler.pickRandomTile', t => {
  const tiles = [1, 2, 3, 4, 5]
 
  t.ok(tiles.includes(Shuffler.pickRandomTile(tiles)),
    'Should pick a random tile correctly')
 
  t.end()
})


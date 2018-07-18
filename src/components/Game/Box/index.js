// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Components
import EmptySpace from '../EmptySpace'
import Tile from '../Tile'

// Actions
import { moveTile } from 'actions/game'


const mapStateToProps = ({ 
  layout: { lid, shake },
  puzzle
}) => ({
  lid, 
  puzzle,
  shake
})

const mapDispatchToProps = dispatch => ({
  onMoveTile: (tile) => {
    dispatch(moveTile(tile))
  }
})

const Box = ({ lid, puzzle, shake, onMoveTile }) => (
  <div className="box">
    {puzzle.map(tile => 
      tile 
        ? <Tile
            key={tile}
            bright={!lid}
            number={tile}
            shake={tile === shake}
            onClick={() => onMoveTile(tile)}
          />
        : <EmptySpace key={tile} />
    )}
  </div>
)

Box.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.number),
  shake: PropTypes.number,
  onMoveTile: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Box)


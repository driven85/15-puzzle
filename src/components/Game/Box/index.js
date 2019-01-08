// Libs
import React, { Component } from 'react'
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

class Box extends Component {
  constructor(props) {
    super(props)

    this.onTileClick = Array.from(
      { length: 15 }, 
      (_, i) => () => props.onMoveTile(i + 1)
    )
  }

  render() {
    const { lid, puzzle, shake, onMoveTile } = this.props

    return (
      <div className="box">
        {puzzle.map(tile => 
          tile 
            ? <Tile
                key={tile}
                bright={!lid}
                number={tile}
                shake={tile === shake}
                onClick={this.onTileClick[tile - 1]}
              />
            : <EmptySpace key={tile} />
        )}
      </div>
    )
  }
}

Box.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.number),
  shake: PropTypes.number,
  onMoveTile: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Box)


// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Components
import EmptySpace from '../EmptySpace'
import Tile from '../Tile'

// Actions
import { moveTile } from 'actions/puzzle'


const mapStateToProps = ({ puzzle }) => ({ puzzle })

const mapDispatchToProps = dispatch => ({
  onMoveTile: (tile) => {
    dispatch(moveTile(tile))
  }
})

const Box = ({ puzzle, onMoveTile }) => (
  <div className="box">
    {puzzle.map(tile => 
      tile 
        ? <Tile
            key={tile}
            number={tile}
            onClick={() => onMoveTile(tile)}
          />
        : <EmptySpace key={tile} />
    )}
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Box)


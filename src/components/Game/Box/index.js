// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Components
import EmptySpace from '../EmptySpace'
import Tile from '../Tile'


const mapStateToProps = ({ puzzle }) => ({ puzzle })

const Box = ({ puzzle }) => (
  <div className="box">
    {puzzle.map(tile => 
      tile 
        ? <Tile
            key={tile}
            number={tile}
          />
        : <EmptySpace key={tile} />
    )}
  </div>
)

export default connect(mapStateToProps)(Box)


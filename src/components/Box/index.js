// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Components
import EmptySpace from 'components/EmptySpace'
import Tile from 'components/Tile'


const mapStateToProps = ({ tiles }) => ({ tiles })

const Box = ({ tiles }) => (
  <div className="box">
    {tiles.map(tile => 
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


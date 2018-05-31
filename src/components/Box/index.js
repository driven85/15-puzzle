// Libs
import React from 'react'

// CSS
import './styles.sass'

// Components
import EmptySpace from 'components/EmptySpace'
import Tile from 'components/Tile'


const state = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]

const Box = () => (
  <div className="box">
    {state.map(tile => 
      tile 
        ? <Tile
            key={tile}
            number={tile}
          />
        : <EmptySpace key={tile} />
    )}
  </div>
)

export default Box


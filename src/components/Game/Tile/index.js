// Libs
import React from 'react'

// CSS
import './styles.sass'


const Tile = ({ number, onClick }) => (
  <div className="tile" onClick={onClick}>
    {number}
  </div>
)

export default Tile


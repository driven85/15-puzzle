// Libs
import React from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Tile = ({ number, shake, onClick }) => (
  <div 
    className={classNames('tile', { shake })}
    onClick={onClick}
  >
    {number}
  </div>
)

export default Tile


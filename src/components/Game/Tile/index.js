// Libs
import React from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Tile = ({ bright, number, shake, onClick }) => (
  <div 
    className={classNames('tile', { bright, shake })}
    onClick={onClick}
  >
    {number}
  </div>
)

export default Tile


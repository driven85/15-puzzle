// Libs
import React from 'react'

// CSS
import './styles.sass'


const Loader = ({ width, height }) => (
  <div 
    className="loader"
    style={{ width, height }}
  >
    <div className="spinner" />
  </div>
)

export default Loader


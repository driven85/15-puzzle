// Libs
import React from 'react'

// CSS
import './styles.sass'


const Switch = ({ width, height, onChange }) => (
  <label 
    className="switch"
    style={{ width, height }}
  >
    <input type="checkbox" onChange={onChange} />
    <span className="slider" />
  </label>
)

export default Switch


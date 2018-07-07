// Libs
import React from 'react'
import PropTypes from 'prop-types'

// CSS
import './styles.sass'


const Switch = ({ width, height, onChange }) => (
  <label 
    className="switch"
    style={{ width, height }}
  >
    <input type="checkbox" onChange={e => onChange(e)} />
    <span className="slider" />
  </label>
)

Switch.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onChange: PropTypes.func
}

export default Switch


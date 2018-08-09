// Libs
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// CSS
import './styles.sass'


const Switch = ({ className, width, height, onChange }) => (
  <label 
    className={classNames('switch', className)}
    style={{ width, height }}
  >
    <input 
      type="checkbox" 
      onChange={e => onChange(e.target.checked)} 
    />
    <span className="slider" />
  </label>
)

Switch.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onChange: PropTypes.func
}

export default Switch


// Libs
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Checkbox = ({ 
  bright, 
  checked, 
  checkedIcon,
  checkmarkStyle,
  className,
  label, 
  style,
  uncheckedIcon,
  onChange 
}) => (
  <label 
    className={classNames('checkbox', className, { bright })}
    style={style}
  >
    {label}
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={e => onChange(e.target.checked)}
    />
    {checkedIcon && uncheckedIcon
      ? <span className="icon">
          {checked && checkedIcon}
          {!checked && uncheckedIcon}
        </span>
      : <span 
          className="checkmark"
          style={checkmarkStyle}
        />
    }
  </label>
)

Checkbox.propTypes = {
  bright: PropTypes.bool,
  checked: PropTypes.bool,
  checkedIcon: PropTypes.element,
  checkmarkStyle: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  uncheckedIcon: PropTypes.element,
  onChange: PropTypes.func
}

export default Checkbox


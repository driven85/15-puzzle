// Libs
import React from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Card = ({ children, className }) =>
  <div className={classNames('card', className)}>
    {children}
  </div>

export default Card


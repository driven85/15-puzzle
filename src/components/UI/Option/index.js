// Libs
import React, { Component } from 'react'

// CSS
import './styles.sass'


const Option = ({ children, value }) => (
  <div 
    className="option"
    data-value={value}
  >
    {children}
  </div>
)

export default Option


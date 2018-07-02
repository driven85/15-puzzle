// Libs
import React from 'react'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Dialog = ({ 
  show, 
  width, 
  height, 
  children,
  onClose
}) => (
  <Transition
    in={show}
    timeout={{
      enter: 0,
      exit: 900
    }}
    unmountOnExit
  >
    {state => (
      <div className={classNames('dialog', state)}>
        <div 
          className="backdrop"
          onClick={onClose}
        >
          <div 
            className="content"
            style={{ width, height }}
          >
            {children} 
          </div>
        </div>
      </div>
    )}
  </Transition>
)

export default Dialog


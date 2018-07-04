// Libs
import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'

// CSS
import './styles.sass'


export default class Dialog extends Component {
  handleBackdropClick = e => {
    const { onClose } = this.props

    if (e.target === e.currentTarget)
      onClose()
  }

  render() {
    const { show, width, height, children } = this.props

    return (
      <Transition
        in={show}
        timeout={{ enter: 0, exit: 900 }}
        unmountOnExit
      >
        {state => (
          <div className={classNames('dialog', state)}>
            <div 
              className="backdrop"
              onClick={this.handleBackdropClick}
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
  }
}


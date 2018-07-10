// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { 
      show, 
      width, 
      height, 
      children, 
      header, 
      title, 
      onClose 
    } = this.props

    const headerElement = 
      <header>
        <label>{title}</label>
        <div className="close" onClick={onClose}>+</div>
      </header>

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
                {header && headerElement}
                {children} 
              </div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}

Dialog.propTypes = {
  show: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  header: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}


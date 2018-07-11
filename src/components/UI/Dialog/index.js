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
      children, 
      contentStyle,
      header, 
      headerStyle,
      mainStyle,
      show, 
      title,
      onClose 
    } = this.props

    const headerElement = 
      <header style={headerStyle}>
        <label>{title}</label>
        <div className="close" onClick={onClose}>&times;</div>
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
                style={contentStyle}
              >
                {header && headerElement}
                <main style={mainStyle}>
                  {children}
                </main>
              </div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  contentStyle: PropTypes.object,
  header: PropTypes.bool,
  headerStyle: PropTypes.object,
  mainStyle: PropTypes.object,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
}


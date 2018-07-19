// Libs
import React, { Component } from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


class Select extends Component {
  state = { open: false }

  selectRef = React.createRef()

  toggleHandler = () => {
    this.setState({ open: !this.state.open })
  }

  changeHandler = e => {
    this.toggleHandler()
    // TODO: redo
    this.props.onChange({ 
      target: {
        value: e.target.dataset.value
      }
    })
  }

  closeHandler = e => {
    if (!this.selectRef.current.contains(e.target)) {
      this.setState({ open: false })
    }
  }
  
  componentDidMount() {
    window.addEventListener('click', this.closeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeHandler)
  }

  render() {
    const { children, value } = this.props
    const { open } = this.state
    let icon, selected

    // TODO: refactor
    children.forEach(child => {
      if (child.props.value === value) {
        icon = child.props.icon
        selected = child.props.children
      } 
    })

    return (
      <div 
        className="select"
        ref={this.selectRef}
      >
        <div 
          className={classNames('select-selected', { open })}
          onClick={this.toggleHandler}
        >
          {icon && <span className="icon">{icon}</span>}
          {selected}
        </div>
        <div 
          className={classNames('options', { 'options-hide': !open })}
          onClick={this.changeHandler}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default Select


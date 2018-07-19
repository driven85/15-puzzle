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
    this.props.onChange(e.target.dataset.value)
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
    const { 
      props: { icon: optionIcon, children: optionContent } 
    } = 
      children.find(child => child.props.value === value)

    return (
      <div 
        className="select"
        ref={this.selectRef}
      >
        <div 
          className={classNames('select-selected', { open })}
          onClick={this.toggleHandler}
        >
          {optionIcon && <span className="icon">{optionIcon}</span>}
          {optionContent}
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


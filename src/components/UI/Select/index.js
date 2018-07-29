// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './styles.sass'


export const Option = ({ children, icon, selected, value }) => (
  <div 
    className={classNames('option', { selected })}
    data-value={value}
  >
    <span className="icon">{icon}</span>
    {children}
  </div>
)

Option.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  icon: PropTypes.node,
  selected: PropTypes.bool,
  value: PropTypes.string 
}

export default class Select extends Component {
  state = { open: false }

  selectRef = React.createRef()

  toggleHandler = () => {
    this.setState({ open: !this.state.open })
  }

  changeHandler = e => {
    const newValue = e.target.dataset.value

    this.toggleHandler()
    if (this.props.value !== newValue)
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
    const { 
      bright, 
      className,
      children, 
      style,
      value
    } = this.props
    const { open } = this.state
    const { 
      props: { icon: optionIcon, children: optionContent } 
    } = 
      React.Children.toArray(children)
        .find(child => child.props.value === value) || { props: {} }

    return (
      <div 
        className={classNames('select', className, { bright })}
        ref={this.selectRef}
        style={style}
      >
        <div 
          className={classNames('select-selected', { open })}
          onClick={this.toggleHandler}
        >
          {optionIcon && <span className="icon">{optionIcon}</span>}
          {optionContent}
        </div>
        <div 
          className={classNames('select-options', { 
            'select-options-hide': !open 
          })}
          onClick={this.changeHandler}
        >
          {React.Children.map(children, child =>
            React.cloneElement(child, { 
              selected: child.props.value === value 
            })
          )}
        </div>
      </div>
    )
  }
}

Select.propTypes = {
  bright: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func
}


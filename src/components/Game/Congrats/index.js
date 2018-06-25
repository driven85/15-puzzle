// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

// CSS
import './styles.sass'


const mapStateToProps = ({ layout: { solved } }) => ({
  show: solved
})

const Congrats = ({ show }) => (
  <Transition
    in={show}
    timeout={{
      enter: 100,
      exit: 800
    }}
    unmountOnExit
  >
    {state => 
      <div className={classNames('congrats', state)}>
        <label>Congrats!!!<br /> You solved the<br /> puzzle!</label>
      </div>
    }
  </Transition>
)

export default connect(mapStateToProps)(Congrats)


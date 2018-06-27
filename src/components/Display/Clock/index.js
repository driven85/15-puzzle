// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

// Images
import ClockOff from 'images/clock-off.svg'
import ClockOn from 'images/clock-on.svg'

// CSS
import './styles.sass'

// Helpers
import { formattedTime } from 'helpers/display'


const mapStateToProps = ({ 
  display: { time }, 
  layout: { lid } 
}) => ({
  lid, 
  time
})

const Clock = ({ lid, time }) => (
  <div className={classNames('clock', { on: !lid })}>
    <img src={lid ? ClockOff  : ClockOn} />
    <div>{formattedTime(time)}</div>
  </div>
)

export default connect(mapStateToProps)(Clock)


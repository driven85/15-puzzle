// Libs
import React from 'react'
import { connect } from 'react-redux'

// Images
import ClockIcon from 'images/clock.svg'

// CSS
import './styles.sass'

// Helpers
import { formattedTime } from 'helpers/display'


const mapStateToProps = ({ display: { time } }) => ({
  time
})

const Clock = ({ time }) => (
  <div className="clock">
    <img src={ClockIcon} />
    <div>{formattedTime(time)}</div>
  </div>
)

export default connect(mapStateToProps)(Clock)


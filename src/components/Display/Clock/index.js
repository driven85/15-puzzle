// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

// Icons
import ClockSvg from 'icons/ClockSvg'

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
    <ClockSvg className={classNames({ off: lid, on: !lid })} />
    <div>{formattedTime(time)}</div>
  </div>
)

Clock.propTypes = {
  lid: PropTypes.bool,
  time: PropTypes.number
}

export default connect(mapStateToProps)(Clock)


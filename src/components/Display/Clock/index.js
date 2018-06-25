// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Helpers
import { formattedTime } from 'helpers/display'


const mapStateToProps = ({ display: { time } }) => ({
  time
})

const Clock = ({ time }) => (
  <div className="clock">
    {formattedTime(time)}
  </div>
)

export default connect(mapStateToProps)(Clock)


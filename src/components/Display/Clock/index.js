// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'


const mapStateToProps = ({ display: { time } }) => ({
  time
})

const Clock = ({ time }) => (
  <div className="clock">
    {time}
  </div>
)

export default connect(mapStateToProps)(Clock)


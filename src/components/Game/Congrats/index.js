// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'


const mapStateToProps = ({ layout: { solved } }) => ({
  show: solved
})

const Congrats = ({ show }) => (
  show &&
    <div className="congrats">
      <label>Congrats!!!<br />You solved the puzzle!</label>
    </div>
)

export default connect(mapStateToProps)(Congrats)


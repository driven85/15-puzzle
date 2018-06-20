// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

// CSS
import './styles.sass'


const mapStateToProps = ({ layout: { lid } }) => ({
  lid
})

const Lid = ({ lid }) => (
  <React.Fragment>
    <div className={classNames('lid back', { open: !lid })} />
    <div className={classNames('lid front', { open: !lid })}>
      <label>15 Puzzle</label>
    </div>
  </React.Fragment>
)

export default connect(mapStateToProps)(Lid)


// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

// CSS
import './styles.sass'


const mapStateToProps = ({ layout: { lidOpen } }) => ({
  lidOpen
})

const Lid = ({ lidOpen }) => (
  <React.Fragment>
    <div className={classNames('lid back', { open: lidOpen })} />
    <div className={classNames('lid front', { open: lidOpen })}>
      <span className="play">
        Play!
      </span>
    </div>
  </React.Fragment>
)

export default connect(mapStateToProps)(Lid)


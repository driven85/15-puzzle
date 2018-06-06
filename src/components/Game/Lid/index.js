// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

// CSS
import './styles.sass'

// Actions
import { lidOpen } from 'actions/layout/lidOpen'


const mapStateToProps = ({ layout: { lidOpen } }) => ({
  lidOpen
})

const mapDispatchToProps = dispatch => ({
  onOpen: (e) => dispatch(lidOpen())
})

const Lid = ({ lidOpen, onOpen }) => (
  <React.Fragment>
    <div className={classNames('lid back', { open: lidOpen })} />
    <div className={classNames('lid front', { open: lidOpen })}>
      <span 
        className="play"
        onClick={onOpen}
      >
        Play!
      </span>
    </div>
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(Lid)


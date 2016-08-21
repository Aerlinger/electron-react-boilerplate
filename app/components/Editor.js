import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as EditorActions from '../actions/editor'


class Editor extends Component {
  static propTypes = {
    evaluate: PropTypes.func.isRequired,
    getDoc: PropTypes.func.isRequired,
    getVariables: PropTypes.func.isRequired
  }

  render() {
    let { evaluate, getDoc, getVariables } = this.props

    return (
      <div>
        <div className='backButton'>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <h2>Editor</h2>

        <pre>a = 5; print a; a</pre>

        <button onClick={evaluate}>Evaluate</button>
        <button onClick={getDoc}>Get Doc</button>
        <button onClick={getVariables}>Get Variables</button>

        <Link to="/">Back home</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EditorActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Editor)

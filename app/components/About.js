import React, { Component } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
  render(){
    return (
      <div>
        <h2>About</h2>
        <div className='backButton'>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <Link to="/">Back home</Link>
      </div>
    )
  }
}

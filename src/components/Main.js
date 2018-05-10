import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Camera = () =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 19.2c3.313 0 6-2.687 6-6s-2.687-6-6-6c-3.313 0-6 2.687-6 6s2.687 6 6 6zM3.6 10.8c0.662 0 1.2-0.538 1.2-1.2s-0.538-1.2-1.2-1.2c-0.662 0-1.2 0.538-1.2 1.2s0.538 1.2 1.2 1.2zM21.6 4.8c1.326 0 2.4 1.074 2.4 2.4v12c0 1.326-1.074 2.4-2.4 2.4h-19.2c-1.326 0-2.4-1.074-2.4-2.4v-12c0-1.326 1.074-2.4 2.4-2.4h19.2z"></path>
    <path d="M15.6 13.2c0 1.988-1.612 3.6-3.6 3.6s-3.6-1.612-3.6-3.6c0-1.988 1.612-3.6 3.6-3.6s3.6 1.612 3.6 3.6z"></path>
    <path d="M3.6 3.6h6v-1.2h-6z"></path>
  </svg>

class Main extends Component {
  render() {
    return (
      <div id='main'>
        <Link className='cancel' to='/'/>
        <div className='search-bar'>
          <input placeholder='Search' type="text"/>
          <Link to='menu'><Camera/></Link>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
}))(Main)

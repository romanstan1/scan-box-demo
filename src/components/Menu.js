import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div id='menu'>
        <Link className='cancel' to='/'/>
        <Link className="menu-button" to='webcam'>Take a photo</Link>
        <Link className="menu-button" to='' >Scan barcode</Link>
      </div>
    )
  }
}

export default connect(state => ({
}))(Menu)

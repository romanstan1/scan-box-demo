import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Camera from './camera/Camera.js';
import {imageTaken} from '../store/modules/actions.js';
import {push} from 'react-router-redux';

const CaptureButton = ({ onClick }) =>
  <div className='capture-button' onClick={onClick} type="button">
  </div>

class WebcamParent extends Component {

  state = {
    result: null,
  }

  handleCapture = (data) => {
    const base64 = data.slice(23, data.length)
    this.props.dispatch(imageTaken(base64))
    this.props.dispatch(push('/checkphoto'))
  }

  render() {
    return (
      <div id='main' className='webcam'>
        <Camera
          captureButtonRenderer={onClick => <CaptureButton className='capture' onClick={onClick} />}
          onTakePhoto={(image) => this.handleCapture(image)}
        />
        <Link className='cancel-text' to='/'>Cancel</Link>
      </div>
    )
  }
}

export default connect(state => ({
}))(WebcamParent)

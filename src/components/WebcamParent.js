import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Camera from './camera/Camera.js';
import {imageTaken} from '../store/modules/actions.js';
import {push} from 'react-router-redux';

// "react-router-redux": "^5.0.0-alpha.6",
// console.log('push', push)
const CaptureButton = ({ onClick }) =>
  <div className='capture-button' onClick={onClick} type="button">
  </div>

class WebcamParent extends Component {

  state = {
    result: null,
  }

  handleCapture = (data) => {
    // const base64 = "b'" + data.slice(23, data.length) + "'"
    const base64 = data.slice(23, data.length)
    this.props.dispatch(imageTaken(base64))
    this.props.dispatch(push('/checkphoto'))

    // this.context.store.dispatch(push('/search?id=123'))
    // this.props.dispatch(takePhoto(base64))
    // if(!!data) this.setState({ result: data})
    // var win = window.open(data, '_blank');
    // win.focus();
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

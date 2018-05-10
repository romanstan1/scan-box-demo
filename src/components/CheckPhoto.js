import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {push} from 'react-router-redux';
import {sendPhoto, clearData} from '../store/modules/actions.js';

class CheckPhoto extends Component {
  componentDidMount() {
    if(!this.props.currentImage) {
      this.props.dispatch(push('/'))
    }
  }
  handleSendPhoto = () => {
    this.props.dispatch(clearData())
    this.props.dispatch(sendPhoto(this.props.currentImage))
  }
  render() {
    return (
      <div id='check-photo'>
        <div className="imagewrap">
          <img src={"data:image/jpeg;base64," + this.props.currentImage} alt=""/>
        </div>
        <div className='buttons'>
          <Link className='retake' to='/webcam'>Retake</Link>
          <Link onClick={this.handleSendPhoto} className='usephoto' to='/plp'>Next</Link>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  currentImage: state.data.currentImage
}))(CheckPhoto)

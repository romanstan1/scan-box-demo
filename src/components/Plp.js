import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {push} from 'react-router-redux';


class Plp extends Component {
  componentDidMount() {
    if(!this.props.currentImage) {
      this.props.dispatch(push('/'))
    }
  }
  render() {
    const {returnedImages} = this.props
    return (
      <div id='plp'>
        <Link className='cancel' to='/'/>
        <div className='content'>
          {
            returnedImages === 'Not Found'?
            <span>
              <div className='text'> Product Not Found!</div>
              <Link className='retake' to='/webcam'> Retake </Link>
            </span>
            :
            returnedImages.length?
            returnedImages.map((returnedImage, i) => {
              const image = returnedImage.image.slice(2, -1)
              return <div key={i}>
                <img src={"data:image/jpeg;base64," + image} alt=""/>
              </div>
              }
            )
            : <div className='text'>Loading...</div>
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  currentImage: state.data.currentImage,
  returnedImages: state.data.returnedImages
}))(Plp)

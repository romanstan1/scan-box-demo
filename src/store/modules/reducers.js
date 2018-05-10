
const initialState = {
  currentImage: null,
  returnedImages: []
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'IMAGE_TAKEN': return {
      ...state,
      currentImage: action.payload
    }
    case 'CLEAR_DATA': return {
      ...state,
      returnedImages: []
    }
    case 'IMAGES_RETURNED_SUCCESSFUL':
    return {
      ...state,
      returnedImages: action.payload
    }
    case 'IMAGES_RETURNED_NOT_FOUND': return {
      ...state,
      returnedImages: 'Not Found'
    }
    case 'IMAGES_RETURNED_ERROR': return {
      ...state
    }
    default: return state
  }
}

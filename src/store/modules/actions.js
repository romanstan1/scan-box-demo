
export const imageTaken = (base64) => {
  return dispatch => dispatch({
    type: 'IMAGE_TAKEN',
    payload: base64
  })
}

export const clearData = () => {
  return dispatch => dispatch({
    type: 'CLEAR_DATA'
  })
}

export const sendPhoto = (base64) => {
  return async dispatch => {
    const data = await getRelatedProducts(base64)
    if(data === 'Error') return dispatch({
      type: 'IMAGES_RETURNED_ERROR'
    })
    else {
      if(data.image === "Not Found") return dispatch({
        type: 'IMAGES_RETURNED_NOT_FOUND'
      })
      else return dispatch({
        type: 'IMAGES_RETURNED_SUCCESSFUL',
        payload: data
      })
    }
  }
}

function getRelatedProducts(base64) {
  return fetch(`https://glacial-fortress-27429.herokuapp.com/`,
  {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { "image": "b'" + base64 + "'" }
    )
  })
  .then(res => res.json())
  .catch(error => {
    console.log("Error with sending photo:  ",error)
    return 'Error'
  })
}

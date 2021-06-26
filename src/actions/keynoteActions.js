const url = 'http://localhost:8000/keynotes/'
    
export const setKeynotes = (keynotes) => ({type: 'KEYNOTES_RECEIVED', payload: keynotes })

export const addKeynote = (keynote) => ({type: "ADDED_KEYNOTE", payload: keynote})

export const deletedKeynote = (id) => ({type: "DELETED_KEYNOTE", payload: id})

export const fetchKeynotes = () => {
  return (dispatch) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      dispatch(setKeynotes(data))
    })
  }
}

export const createKeynote = (keynote) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(keynote)
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
      const newKeynote = data
      dispatch(addKeynote(newKeynote))
    })
  }
}

export const deleteKeynote = (id) => {
  return(dispatch) => {
    const configObj = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }
    }
    fetch(`${url}/${id}`, configObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(deletedKeynote(id))
    })
    
  }
}
const url = 'http://localhost:8000/keynotes/'
    
export const setKeynotes = (keynotes) => ({type: 'KEYNOTES_RECEIVED', payload: keynotes })

export const addKeynote = (keynote) => ({type: "ADDED_KEYNOTE", payload: keynote})

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
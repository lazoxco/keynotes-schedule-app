export const createKeynote = (keynote) => {
  return (dispatch, getState) => {
    // make async call to DB
    dispatch({ type: 'ADD_KEYNOTE', keynote})
  }
}
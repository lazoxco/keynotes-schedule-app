const initState = [
  {
    "id": 1,
    "title": "What is Ruby on Rails?",
    "speaker": "Captain America",
    "description": "Learn Ruby on Rails",
    "date_time": "06/12/2022 9:00 AM"
  },
  {
    "id": 2,
    "title": "What is React?",
    "speaker": "Black Widow",
    "description": "Learn React",
    "date_time": "06/12/2022 10:00 AM"
  },
  {
    "id": 3,
    "title": "What is Redux?",
    "speaker": "Tony Stark",
    "description": "Learn Redux",
    "date_time": "06/12/2022 11:00 AM"
  }
]

const keynoteReducer = (state = {keynotes: initState}, action) => {
  switch(action.type) {
    case 'KEYNOTES_RECEIVED':
      return {...state, keynotes: action.payload}
    // case 'ADD_KEYNOTE':
    //   return {...state.keynotes, keynotes: [action.payload]}
    case 'ADDED_KEYNOTE':
      return {...state, keynotes: [...state.keynotes, action.payload]}
    default:
      return state
  }
  
}

export default keynoteReducer
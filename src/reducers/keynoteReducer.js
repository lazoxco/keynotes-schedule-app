const initState = [
  {
    "id": 1,
    "title": "What is Ruby on Rails?",
    "speaker": "Captain America",
    "description": "Learn the basics of Ruby on Rails",
    "date_time": "06/12/2022 9:00 AM"
  },
  {
    "id": 2,
    "title": "What is React?",
    "speaker": "Black Widow",
    "description": "Learn the basics of React",
    "date_time": "06/12/2022 10:00 AM"
  },
  {
    "id": 3,
    "title": "What is Redux?",
    "speaker": "Tony Stark",
    "description": "Learn the basics of Redux",
    "date_time": "06/12/2022 11:00 AM"
  }
]

const keynoteReducer = (state = {keynotes: initState, loading: false}, action) => {
  return state
}

export default keynoteReducer
import React, { Component } from 'react'

class NewKeynote extends Component {
  state = {
    title: '',
    speaker: '',
    description: '',
    date_time: '',
  }
  render() {
    return (
      <div>
        <h1>Create a Keynote</h1>        
      </div>
    )
  }
}

export default NewKeynote
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createKeynote } from '../actions/keynoteActions'

class NewKeynote extends Component {
  state = {
    title: '',
    speaker: '',
    description: '',
    date_time: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createKeynote(this.state)
    this.setState({
      title: '',
      speaker: '',
      description: '',
      date_time: '',
    })
  }


  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit} className="keynote-form">
        <h1>Create a Keynote</h1>
          <div className="input-group">
            <input onChange={this.handleChange} className="form-control" placeholder="Title" type="text" id="title" value={this.state.title}/>
          </div>

          <div className="input-group">
            <input onChange={this.handleChange} className="form-control" placeholder="Speaker" type="text" id="speaker" value={this.state.speaker}/>
          </div>

          <div className="input-group">
            <textarea onChange={this.handleChange} className="form-control" placeholder="Description" type="text" id="description" value={this.state.description}></textarea>
          </div>

          <div className="input-group">
            <input onChange={this.handleChange} className="form-control" placeholder="Date and Time" type="text" id="date_time" value={this.state.date_time}/>
          </div>

          <div className="input-group">
            <button className="btn btn-primary" type="submit">Create Keynote</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createKeynote: (keynote) => dispatch(createKeynote(keynote))
  }
}

export default connect(null, mapDispatchToProps)(NewKeynote)
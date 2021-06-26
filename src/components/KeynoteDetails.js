import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteKeynote } from '../actions/keynoteActions'

class KeynoteDetails extends Component {

  handleClick = () => {
    const id = this.props.match.params.id
    this.props.deleteKeynote(id)
    this.props.history.push('/keynotes')
  }

  render() {
    const { keynote } = this.props
    return (
      <div className="container">
        <h1>{ keynote.title }</h1>
        <p>Date and time: { keynote.date_time } </p>
        <p>Presented by: { keynote.speaker }</p>
        <p>Description: { keynote.description }</p>
        <p>{ keynote.speaker }</p>
        <hr />
        <button onClick={this.handleClick} className="btn btn-primary">Delete Keynote</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  const keynote = state.keynotes.find(keynote => keynote.id === id)
  return {
    keynote: keynote
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteKeynote: (id) => dispatch(deleteKeynote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeynoteDetails)
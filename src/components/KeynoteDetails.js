import React from 'react'
import { connect } from 'react-redux'

const KeynoteDetails = (props) => {
  const id = props.match.params.id
  const { keynote } = props
  return (
    <div>
      <h1>{ keynote.title }</h1>
      <p>Date and time: { keynote.date_time } </p>
      <p>Presented by: { keynote.speaker }</p>
      <p>Description: { keynote.description }</p>
      <p>{ keynote.speaker }</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const keynote = state.keynotes.find(keynote => keynote.id == id)
  return {
    keynote: keynote
  }
}

export default connect(mapStateToProps)(KeynoteDetails)
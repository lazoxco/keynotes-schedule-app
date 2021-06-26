import React, { Component } from 'react'
import NewKeynote from '../components/NewKeynote'
import Keynotes from '../components/Keynotes'
import KeynoteDetails from '../components/KeynoteDetails'

class KeynotesContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <Keynotes />
    )
  }
}

export default KeynotesContainer
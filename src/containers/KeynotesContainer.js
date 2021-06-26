import React, { Component } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import Keynotes from '../components/Keynotes'
import NewKeynote from '../components/NewKeynote'
import KeynoteDetails from '../components/KeynoteDetails'
import { connect } from 'react-redux'

class KeynotesContainer extends Component {
  render() {
    const { keynotes } = this.props
    return (
      <Switch>
        <Route exact path="/keynotes">
          <Keynotes keynotes={keynotes}/>
        </Route>
        <Route exact path="/keynotes/new">
          <NewKeynote />
        </Route>
        <Route exact path="/keynotes/:id">
          <KeynoteDetails />
        </Route>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes
  }
}

export default connect(mapStateToProps)(KeynotesContainer)
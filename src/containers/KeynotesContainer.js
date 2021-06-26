import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewKeynote from '../components/NewKeynote'
import Keynotes from '../components/Keynotes'
import KeynoteDetails from '../components/KeynoteDetails'

class KeynotesContainer extends Component {
  render() {
    console.log(this)
    return (
        <Router>
          <Switch>
            <Route exact path='/keynotes' component={Keynotes} />
            <Route exact path='/keynotes/new' component={NewKeynote} />
            <Route exact path='/keynotes/:id' component={(routeData) => <KeynotesContainer routeData={routeData} />} />
          </Switch>
        </Router>
    )
  }
}

export default KeynotesContainer
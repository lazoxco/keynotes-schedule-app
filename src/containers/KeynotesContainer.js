import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewKeynote from '../components/NewKeynote'
import Keynotes from '../components/Keynotes'

class KeynotesContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/keynotes' component={Keynotes} />
          <Route exact path='/keynotes/new' component={NewKeynote} />
        </Switch>
      </Router>
    )
  }
}

export default KeynotesContainer
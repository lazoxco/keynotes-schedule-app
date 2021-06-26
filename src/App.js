import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Navbar />
          </Switch>
        </div>
      </Router>
    )
}
}

export default App;

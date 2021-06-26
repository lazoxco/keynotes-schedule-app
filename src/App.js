import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import KeynotesContainer from './containers/KeynotesContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="app-body container">
            <Switch>  
              <Route exact path="/" component={Home} />
              <Route path="/keynotes" component={KeynotesContainer} />
            </Switch>
          </div>

        </div>
      </Router>
    )
}
}

export default App;

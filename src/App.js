import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import KeynotesContainer from './containers/KeynotesContainer'
import KeynoteDetails from './components/KeynoteDetails'
import NewKeynote from './components/NewKeynote'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>  
              <Route exact path="/" component={Home} />
              <Route exact path="/keynotes" component={KeynotesContainer} />
              <Route exact path="/keynotes/new" component={NewKeynote} />
              <Route exact path="/keynotes/:id" component={KeynoteDetails} />
              <Route path="*" render={() => <h1>404 | Page Not Found</h1>} />    
            </Switch>
        </div>
      </Router>
    )
}
}

export default App;

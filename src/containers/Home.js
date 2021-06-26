import React, { Component } from 'react'
import HeroImage from '../components/HeroImage'
import KeynotesContainer from '../containers/KeynotesContainer'

class Home extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <div className="container intro">
            <div className="row intro">
              <div className="col">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Lu3qzZ1Ck9g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col">
                <h1>Eat. Sleep. Code. Repeat.</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1 className="text-center">Schedule</h1>
                <KeynotesContainer />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home
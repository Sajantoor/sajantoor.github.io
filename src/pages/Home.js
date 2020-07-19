import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Halftones from '../components/Halftones';

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Halftones/>
        <Navigation/>
        <Landing/>
        <About/>
      </React.Fragment>
    )
  }
}

export default Home;

import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import About from '../components/About';

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navigation/>
        <Landing/>
        <About/>
      </React.Fragment>
    )
  }
}

export default Home;

import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navigation/>
        <Landing/>
      </React.Fragment>
    )
  }
}


export default Home;

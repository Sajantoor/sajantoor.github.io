import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import About from '../components/About';
// eslint-disable-next-line
import Halftones from '../components/Halftones';
import ProjectContainer from '../components/ProjectContainer';


class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navigation/>
        <Landing/>
        <About/>
        <ProjectContainer/>
      </React.Fragment>
    )
  }
}

export default Home;

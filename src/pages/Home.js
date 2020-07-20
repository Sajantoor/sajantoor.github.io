import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
// eslint-disable-next-line
import Halftones from '../components/Halftones';

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navigation/>
        <Landing/>
        <About/>
        <Projects
          title="Coronavirus Tracker" 
          subtitle="Tracking the COVID-19 Pandemic"
          img="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          caption="Visualizing and making COVID-19 information accessible"
        />
      </React.Fragment>
    )
  }
}

export default Home;

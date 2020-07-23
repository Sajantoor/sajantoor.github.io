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
          subtitle="Tracking the Coronavirus Pandemic"
          img="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          caption="Visualizing and making COVID-19 information accessible"
          description="The Coronavirus Tracker project is used to visualize and track the COVID-19 (Coronavirus) pandemic. The goal of 
          the project is making information about COVID-19 easily accessible and easy to understand for the public using
          data visualization. In its current state, the project features a scatterplot layer which changes colors based of the 
          data point and a heat map layer which is weighted based of the value of the data point. It also features the 
          ability to turn these layers on and off, switch between different data parameters such as confirmed cases or 
          deaths and features a tooltip UI component which appears when the user hovers over an element"
        />
      </React.Fragment>
    )
  }
}

export default Home;

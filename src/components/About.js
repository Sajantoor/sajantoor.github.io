import React from 'react';
import styles from '../styles/about.css';
import { ReactComponent as GitHub } from '../assets/logos/GitHub.svg';
import LinkedIn from '../assets/logos/LinkedIn.png';
import { ReactComponent as Code } from '../assets/icons/code.svg';
import { ReactComponent as Email } from '../assets/icons/email.svg';
import { ReactComponent as Place } from '../assets/icons/place.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';


class About extends React.Component {
  render() {
    return(
      <div className="about">

        <div className="left-contain">
          <h1> About Me </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu molestie neque, vitae commodo eros. Maecenas ex ante, molestie sed dolor id, feugiat feugiat elit. Sed auctor felis a nulla suscipit laoreet vitae nec odio. </p>

          <div className="icons">
            <a href="https://github.com/Sajantoor"> <GitHub/> </a>
            <a href=""> <img src={LinkedIn}/> </a>
          </div>

          <a href=""> <button> Download Resume </button> </a>
        </div>

        <div className="right-contain">
          <Email/>
          <a> <p> sajantoor.business@gmail.com </p> </a>
          <Place/>
          <a> <p> Surrey, BC </p> </a>
          <Code/>
          <p> 5 Years of Programming </p>
          <Settings/>
          <p> 2 Years of VEX Robotics </p>
        </div>

      </div>
    )
  }
}

export default About;

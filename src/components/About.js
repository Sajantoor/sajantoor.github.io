import React from 'react';
// eslint-disable-next-line
import styles from '../styles/about.css';
import { ReactComponent as GitHub } from '../assets/logos/GitHub.svg';
import LinkedIn from '../assets/logos/LinkedIn.png';
import { ReactComponent as Code } from '../assets/icons/code.svg';
import { ReactComponent as Email } from '../assets/icons/email.svg';
import { ReactComponent as Place } from '../assets/icons/place.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';
import { ReactComponent as AboutTitleAsset } from '../assets/shapes/AboutTitleAsset.svg';
import { ReactComponent as TransitionAsset } from '../assets/shapes/Transition Asset.svg';



class About extends React.Component {
  render() {
    return(
      <div className="about">

        <div className="left-contain">
          <div className="title">
            <h1> About Me </h1>
            <AboutTitleAsset/>
          </div>
          <h1 className="backgroundText"> About </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu molestie neque, vitae commodo eros. Maecenas ex ante, molestie sed dolor id, feugiat feugiat elit. Sed auctor felis a nulla suscipit laoreet vitae nec odio. </p>

          <div className="icons">
            <a href="https://github.com/Sajantoor"> <GitHub/> </a>
            <img src={LinkedIn} alt="LinkedIn Logo"/>
          </div>

          <button> Download Resume </button>
        </div>

        <div className="right-contain">
          <div>
            <Email/>
            <p> sajantoor.business@gmail.com </p>
          </div>
          <div>
            <Code/>
            <p> 5 Years of Programming </p>
          </div>
          <div>
            <Settings/>
            <p> 2 Years of VEX Robotics Competition </p>
          </div>
          <div>
            <Place/>
            <p> 27 Repositories </p>
          </div>
        </div>
        <TransitionAsset/>
      </div>
    )
  }
}

export default About;

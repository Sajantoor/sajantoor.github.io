import React from 'react';
// eslint-disable-next-line
import styles from '../styles/about.css';
import { ReactComponent as GitHub } from '../assets/logos/GitHub.svg';
import LinkedIn from '../assets/logos/LinkedIn.png';
import { ReactComponent as AboutTitleAsset } from '../assets/shapes/AboutTitleAsset.svg';
import { ReactComponent as TransitionAsset } from '../assets/shapes/Transition Asset.svg';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="left-contain">
          <div className="title">
            <h1> About Me </h1>
            <AboutTitleAsset />
          </div>
          <h1 className="backgroundText"> About </h1>
          <p> Hi, I'm a 3rd year Computer Science and math minor student at SFU. I'm passionate about software engineering, artificial inteligence, cybersecurity and mathematics. </p>

          <div className="icons">
            <a href="https://github.com/Sajantoor" target="_blank" rel="noreferrer"> <GitHub /> </a>
            <a href="https://www.linkedin.com/in/sajan-toor-3091a11b2" target="_blank" rel="noreferrer"> <img src={LinkedIn} alt="LinkedIn Logo" /> </a>
          </div>

          <button> Download Resume </button>
        </div>

        {/* <ul className="circles">
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul> */}
        <TransitionAsset />
      </div>
    )
  }
}

export default About;

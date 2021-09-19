import React from 'react';
// eslint-disable-next-line
import styles from '../styles/about.css';
import { ReactComponent as GitHub } from '../assets/logos/GitHub.svg';
import LinkedIn from '../assets/logos/LinkedIn.png';
import { ReactComponent as Code } from '../assets/icons/code.svg';
import { ReactComponent as Email } from '../assets/icons/email.svg';
import { ReactComponent as Git } from '../assets/icons/git.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';
import { ReactComponent as AboutTitleAsset } from '../assets/shapes/AboutTitleAsset.svg';
import { ReactComponent as TransitionAsset } from '../assets/shapes/Transition Asset.svg';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repoCount: null,
      count: 0,
      reachedCount: false,
    }
  }

  

  componentDidMount() {
    this.getRepoCount();
    // this.getRepoCount().then(res => { 
    //   this.count(this);
    // });
  }

  // count(this_) {
  //     console.log('run');
  //     let total = this_.state.repoCount;
  //     let count = this_.state.count;
  //     console.log(total);
  //     console.log(count > total);

  //     if (count < total) {
  //       console.log(true);
  //       this_.setState({count: count + 1});
  //       setTimeout(this.count, 20, this_);
  //     } 
  // }

  /** Fetches from the GitHub API the number of repos and updated repos accordingly */
  async getRepoCount() {
    const data = await fetch("https://api.github.com/users/sajantoor/repos");
    const json = await data.json();
    this.setState({repoCount: json.length});
    return json.length;
  }


  render() {
    const date = new Date();

    return(
      <div className="about">
        <div className="left-contain">
          <div className="title">
            <h1> About Me </h1>
            <AboutTitleAsset/>
          </div>
          <h1 className="backgroundText"> About </h1>
          <p> Hi, I'm a second year Computer Science student at SFU. I'm passionate about programming, artificial inteligence and Cybersecurity. I'm proficient in programming languages such as C, C++, Python, Java, JavaScript and TypeScript. </p>

          <div className="icons">
            <a href="https://github.com/Sajantoor" target="_blank" rel="noreferrer"> <GitHub/> </a>
            <a href="https://www.linkedin.com/in/sajan-toor-3091a11b2" target="_blank" rel="noreferrer"> <img src={LinkedIn} alt="LinkedIn Logo"/> </a>
          </div>

          <button> Download Resume </button>
        </div>

        <div className="right-contain">
          <div>
            <Email/>
            <p> sajantoor98@gmail.com </p>
          </div>
          <div>
            <Code/>
            <p> {date.getFullYear() - 2015} Years of Programming </p>
          </div>
          <div>
            <Settings/>
            <p> 2 Years of VEX Robotics Competition </p>
          </div>
          <div>
            <Git/>
            <p> {this.state.repoCount} Repositories </p>
          </div>
        </div>

        <ul className="circles">
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
        <TransitionAsset/>
      </div>
    )
  }
}

export default About;

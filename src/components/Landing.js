import React from 'react';
// eslint-disable-next-line
import styles from '../styles/landing.css';
import mountainImg from '../assets/img/mountains.png';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: ["Programmer", "Designer", "Student"],
      index: 0,
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="title-contain">
          <h1> Sajan Toor </h1>
          <h2> I'm a <span className="highlight"> {this.state.subtitle[this.state.index]}. </span> </h2>
        </div>
        <img src={mountainImg} alt=""/>
      </div>
    )
  }


  componentDidMount() {
    const this_ = this;
    let index = this_.state.index;

    setInterval(function() {
      if (index === (this_.state.subtitle.length - 1)) {
        index = 0;
      } else {
        index++;
      }

      this_.setState({index: index});

    }, 1000)
  }
}

export default Landing;

import React from 'react';
// eslint-disable-next-line
import styles from '../styles/navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className="navigation">
        <h1> Projects </h1>
        <h1> About </h1>
        <h1> Home </h1>
      </div>
    )
  }
}

export default Navigation;

import React from 'react';
// eslint-disable-next-line
import styles from '../styles/navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.checkScroll = this.checkScroll.bind(this);
    this.state = {
      scrollPosition: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
  }

  checkScroll() {
    let element = this.refs.navigation;
    let siblings = element.parentNode.children;
    // home = 1 / about =  2 / project = 3 
    for (let i = 1; i < siblings.length; i++) {
      let boundingClient = siblings[i].getBoundingClientRect();
      let elementTopPos = boundingClient.top;
      let elementBottomPos = boundingClient.bottom;
      // if element is in view
      if (elementTopPos < 0 && elementBottomPos >= 0) {
        // prevent rerendering over and over
        if (this.state.scrollPosition !== i) {
          this.setState({scrollPosition: i})
        }
        // TODO: Change url ?

        break;
      }
    }
  }

  render() {
    return(
      <div className="navigation" ref="navigation">
        <button className={(this.state.scrollPosition === 3) ? "navButton focus" : "navButton"}> Projects </button>
        <button className={(this.state.scrollPosition === 2) ? "navButton focus" : "navButton"}> About </button>
        <button className={(this.state.scrollPosition === 1) ? "navButton focus" : "navButton"}>  Home </button>
      </div>
    )
  }
}

export default Navigation;

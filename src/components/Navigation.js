import React from 'react';
// eslint-disable-next-line
import styles from '../styles/navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.checkScroll = this.checkScroll.bind(this);
    this.state = {
      scrollPosition: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
    // url pathname
    const pathname = window.location.pathname;
    // on load with url, go to location
    if (pathname === '/about') {
      this.goTo(2);
    } else if (pathname === '/projects') {
      this.goTo(3);
    } else {
      this.goTo(1);
    }
  }

  checkScroll() {
    let element = this.myRef.current;
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
          // changes url based off position
          if (i === 1) {
            window.history.replaceState({}, '', 'home');
          } else if (i === 2) {
            window.history.replaceState({}, '', 'about');
          } else if (i === 3) {
            window.history.replaceState({}, '', 'projects');
          }
        } 

        break;
      }
    }
  }
  
  // scrolls to a certain element
  goTo(pos) {
    let thisElement = this.myRef.current; 
    let siblings = thisElement.parentNode.children;
    let plusConstant; // constant used so user sees all the content needed based on element
    // depending on element index
    if (pos === 2) {
      plusConstant = 30;
      window.history.replaceState({}, '', 'about');
    } else if (pos === 3) {
      plusConstant = 150;
      window.history.replaceState({}, '', 'projects');
    } else {
      plusConstant = 0;
      window.history.replaceState({}, '', 'home');
    }
    // ssmoth scrolls based on scroll distance to element
    const scrollDistance = siblings[pos].getBoundingClientRect().top + window.scrollY + plusConstant;
    window.scroll({top: scrollDistance, behavior: 'smooth'});
  }

  render() {
    return(
      <div className="navigation" ref={this.myRef}>
        <button className={(this.state.scrollPosition === 3) ? "navButton focus" : "navButton"} onClick={() => this.goTo(3)}> Projects </button>
        <button className={(this.state.scrollPosition === 2) ? "navButton focus" : "navButton"} onClick={() => this.goTo(2)}> About </button>
        <button className={(this.state.scrollPosition === 1) ? "navButton focus" : "navButton"} onClick={() => this.goTo(1)}>  Home </button>
      </div>
    )
  }
}

export default Navigation;

import React from 'react';
// eslint-disable-next-line
import styles from '../styles/projectContainer.css';
import Projects from './Projects';
import covidTrackerImage from '../assets/img/COVID-Tracker.png';
import { ReactComponent as GoogleMaps } from '../assets/logos/GoogleMaps.svg';
import { ReactComponent as ReactIcon } from '../assets/logos/React.svg';
import { ReactComponent as Uber } from '../assets/logos/Uber.svg';

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            numeratorNum: 1,
            denominatorNum: 1,
        }
    }
    // gets index of the child the user is viewing and adds it to state
    getCurrentIndex = (dataFromChild) => {
        this.setState({numeratorNum: dataFromChild});
    }

    // calculates denominator excluding 1 child element
    componentDidMount() {
        let el = this.myRef.current;
        let childCount = el.children.length;
        this.setState({denominatorNum: childCount - 1});
    }

    render() {
        const CoronavirusComponents = [ {link: "https://reactjs.org/", component: <ReactIcon/>}, {link: "https://developers.google.com/maps/documentation", component: <GoogleMaps/>}, {link: "https://deck.gl/", component: <Uber/>},]

        return(
            <div className="projectContainer" ref={this.myRef}> 
                <div className="projectPosition">
                    <h1 className="numerator"> {this.state.numeratorNum} </h1>
                    <h1 className="denominator"> {this.state.denominatorNum} </h1>
                </div>
                <Projects
                    title="Coronavirus Tracker" 
                    subtitle="Tracking the Pandemic"
                    img={covidTrackerImage}
                    caption="Visualizing and making COVID-19 information accessible"
                    description="The Coronavirus Tracker project is used to visualize and track the COVID-19 (Coronavirus) pandemic. The goal of the project is making information about COVID-19 easily accessible and easy to understand for the public using data visualization. In its current state, the project features a scatterplot layer which changes colors based of the data point and a heat map layer which is weighted based of the value of the data point. It also features the ability to turn these layers on and off, switch between different data parameters such as confirmed cases or deaths and features a tooltip UI component which appears when the user hovers over an element. The Coronavirus Tracker project is used to visualize and track the COVID-19 (Coronavirus) pandemic. The goal of the project is making information about COVID-19 easily accessible and easy to understand for the public using data visualization. In its current state, the project features a scatterplot layer which changes colors based of the data point and a heat map layer which is weighted based of the value of the data point. It also features the ability to turn these layers on and off, switch between different data parameters such as confirmed cases or deaths and features a tooltip UI component which appears when the user hovers over an element."
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Coronavirus-Tracker"
                    embed="https://sajantoor.github.io/Coronavirus-Tracker/"
                    icons={CoronavirusComponents}
                    backgroundColor={"#4834d4"}
                    giveParentCurrentIndex={this.getCurrentIndex.bind(this)}
                />

                <Projects
                    title="Coronavirus Tracker" 
                    subtitle="Tracking the Pandemic"
                    img={covidTrackerImage}
                    caption="Visualizing and making COVID-19 information accessible"
                    description="The Coronavirus Tracker project is used to visualize and track the COVID-19 (Coronavirus) pandemic. The goal of the project is making information about COVID-19 easily accessible and easy to understand for the public using data visualization. In its current state, the project features a scatterplot layer which changes colors based of the data point and a heat map layer which is weighted based of the value of the data point. It also features the ability to turn these layers on and off, switch between different data parameters such as confirmed cases or deaths and features a tooltip UI component which appears when the user hovers over an element. The Coronavirus Tracker project is used to visualize and track the COVID-19 (Coronavirus) pandemic. The goal of the project is making information about COVID-19 easily accessible and easy to understand for the public using data visualization. In its current state, the project features a scatterplot layer which changes colors based of the data point and a heat map layer which is weighted based of the value of the data point. It also features the ability to turn these layers on and off, switch between different data parameters such as confirmed cases or deaths and features a tooltip UI component which appears when the user hovers over an element."
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Coronavirus-Tracker"
                    embed="https://sajantoor.github.io/Coronavirus-Tracker/"
                    icons={CoronavirusComponents}
                    backgroundColor={"#8e7aff"}
                    giveParentCurrentIndex={this.getCurrentIndex.bind(this)}
                />
            </div>   
        )
    }
}

export default ProjectContainer;
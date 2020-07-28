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
        this.state = {

        }
    }

    render() {
        const CoronavirusComponents = [ {link: "https://reactjs.org/", component: <ReactIcon/>}, {link: "https://developers.google.com/maps/documentation", component: <GoogleMaps/>}, {link: "https://deck.gl/", component: <Uber/>},]

        return(
            <div className="projectContainer"> 
                <div className="projectPosition">
                    <h1 className="numerator"> 1 </h1>
                    <h1 className="denominator"> 5 </h1>
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
                    backgroundColor={"#000"}
                />
            </div>   
        )
    }
}

export default ProjectContainer;
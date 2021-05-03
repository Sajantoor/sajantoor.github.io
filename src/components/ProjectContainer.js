import React from 'react';
// eslint-disable-next-line
import styles from '../styles/projectContainer.css';
import Projects from './Projects';
// COVID
import covidTrackerImage from '../assets/img/COVID-Tracker.png';
import { ReactComponent as GoogleMaps } from '../assets/logos/GoogleMaps.svg';
import { ReactComponent as ReactIcon } from '../assets/logos/React.svg';
import { ReactComponent as Uber } from '../assets/logos/Uber.svg';
// Robotics
import roboticsImg from '../assets/img/Robotics.jpg';
import { ReactComponent as Cpp } from '../assets/logos/C++.svg';
import VEX from '../assets/logos/VEX.png';
import PROS from '../assets/logos/PROS.png';
// Rush Hour
import rushHourImg from '../assets/img/rushhour.png';
import { ReactComponent as Java } from '../assets/logos/Java.svg';
// Discord Bot
import discordImg from '../assets/img/discordImg.png';
import { ReactComponent as TypeScript } from '../assets/logos/TypeScript.svg';
import { ReactComponent as Discord } from '../assets/logos/Discord.svg';
import { ReactComponent as Node } from '../assets/logos/Node.svg';

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        const CoronavirusComponents = [ {link: "https://reactjs.org/", component: <ReactIcon/>}, {link: "https://developers.google.com/maps/documentation", component: <GoogleMaps/>}, {link: "https://deck.gl/", component: <Uber/>},]
        const RushHourComponents = [ {link: "https://www.java.com/en/", component: <Java/>},]
        const Robotics = [ {link: null, component: <Cpp/>}, {link: "https://pros.cs.purdue.edu/", component: <img alt="PROS logo" src={PROS}/>}, {link: "https://www.vexrobotics.com/v5/competition", component: <img alt="VEX logo" src={VEX}/>}]

        const DiscordBot = [ {link: "https://www.typescriptlang.org/", component: <TypeScript/>}, {link: "https://nodejs.org/en/", component: <Node/>}, {link: "https://discord.com/", component: <Discord/>},]

        return(
            <div className="projectContainer" ref={this.myRef}> 
                <Projects
                    title="Coronavirus Tracker" 
                    subtitle="Tracking the Pandemic"
                    img={covidTrackerImage}
                    caption="Visualizing and making COVID-19 information accessible"
                    description="The Coronavirus Tracker project is used to visualize and track the COVID-19 (Coronavirus) pandemic. The goal of the project is making information about COVID-19 easily accessible and easy to understand for the public using data visualization. The project features a scatterplot layer which changes colors based of the data point and a heat map layer which is weighted based of the value of the data point. It also features the ability to turn these layers on and off, switch between different data parameters such as confirmed cases or deaths and features a tooltip UI component which appears when the user hovers over an element."
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Coronavirus-Tracker"
                    embed="https://sajantoor.github.io/Coronavirus-Tracker/"
                    icons={CoronavirusComponents}
                    backgroundColor={"#4834d4"}
                />

                <Projects
                    title="VEX Robotics" 
                    subtitle="Software Lead"
                    img={roboticsImg}
                    caption="Software Lead of VEX Robotics World Competition 2020 Qualified Team 4549A."
                    description="Programmed VEX Robot using C++ and the PROS API to compete in an international and inter-school robotics competition. Obtained data from several sensors such as cameras, potentiometers, gyroscopes, encoders, utilized data to design autonomous capabilities using PID control loops. Used Git and GitHub for version control of software and open sourced the software used for the robot with proper documentation and comments within the code. Mentored novice students, teaching proper programming practices, helped with debugging and taught concepts ranging from the basics of programming to synchronous vs asynchronous programming and tools such as GitHub."
                    link="https://github.com/Sajantoor/4549A-Public"
                    linkText="View GitHub Repo"
                    embed="https://www.instagram.com/4549alpha/"
                    icons={Robotics}
                    backgroundColor={"#20222e"}
                />

                <Projects
                    title="Rush Hour" 
                    subtitle="Solving the Puzzle"
                    img={rushHourImg}
                    caption="Solving the puzzle Rush Hour using graphs and the A* traversal algorithm."
                    description="Solved the puzzle Rush Hour using graphs and the A* traversal algorithm. This was the final project for CMPT 225: Data Structures and Programming at SFU. The basic idea was to parse the board, create easily modifiable board objects which could be used to create projections and new states and traverse said states using A* until a solved state was found. With powerful A* heurstics and other optimizations we were able to solve the hardest puzzle in 0.125 seconds."
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Rush-Hour-Solver"
                    embed={null}
                    icons={RushHourComponents}
                    backgroundColor={"#7289DA"}
                />
               
                <Projects
                    title="Discord Bot" 
                    subtitle="Overwatch Stats Bot"
                    img={discordImg}
                    caption="A Discord Bot with fun commands and Overwatch Stats!"
                    description="This Discord Bot has many features from being able to get user and server information, Overwatch stats or fun things like posting random memes and beeping like a robot 🤖. I wanted a way to easily access Overwatch stats without launching the game or navigating the Overwatch website. The purpose of this project was to learn more about Node.js, TypeScript and the process behind creating a chat bot like a Discord bot. This was the first time I've used Node.js and TypeScript in a project and it was a fun learning experience!"
                    link="https://github.com/Sajantoor/Rush-Hour-Solver"
                    linkText="View GitHub Repo"
                    embed="https://discord.com/oauth2/authorize?client_id=738876776112980098&permissions=124992&scope=bot"
                    icons={DiscordBot}
                    backgroundColor={"#23272A"}
                />
            </div>   
        )
    }
}

export default ProjectContainer;
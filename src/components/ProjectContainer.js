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
        const CoronavirusComponents = [{ link: "https://reactjs.org/", component: <ReactIcon /> }, { link: "https://developers.google.com/maps/documentation", component: <GoogleMaps /> }, { link: "https://deck.gl/", component: <Uber /> },]
        const RushHourComponents = [{ link: "https://www.java.com/en/", component: <Java /> },]
        const Robotics = [{ link: null, component: <Cpp /> }, { link: "https://pros.cs.purdue.edu/", component: <img alt="PROS logo" src={PROS} /> }, { link: "https://www.vexrobotics.com/v5/competition", component: <img alt="VEX logo" src={VEX} /> }]
        const DiscordBot = [{ link: "https://www.typescriptlang.org/", component: <TypeScript /> }, { link: "https://nodejs.org/en/", component: <Node /> }, { link: "https://discord.com/", component: <Discord /> },]

        return (
            <div className="projectContainer" ref={this.myRef}>
                <Projects
                    title="Blockchain"
                    subtitle="Proof of Work Blockchain"
                    img={null}
                    caption="A proof of work blockchain implemented in Rust"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/proof-of-work-blockchain"
                    icons={null}
                    backgroundColor={"#4834d4"}
                >
                    <ul>
                        <li> Developed a proof of work blockchain in Rust using SHA256 hashing and a work queue to mine blocks </li>
                        <li> Implemented a work queue using the consumer-producer pattern to allow for concurrent mining of blocks </li>
                    </ul>
                </Projects>

                <Projects
                    title="LeetCode API"
                    subtitle="Unofficial API orchestrator"
                    img={null}
                    caption="Unofficial API orchestrator for LeetCode"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/LeetCode-API"
                    icons={null}
                    backgroundColor={"#4834d4"}
                >
                    <ul>
                        <li> Developed an API orchestrator, providing REST APIs for common LeetCode operations such as retrieving problems and submitting solutions using Java and Spring Boot </li>
                        <li> Utilized Apache HTTP Client to make HTTP requests to LeetCode’s REST and GraphQL APIs </li>
                        <li> Documented the API endpoints using Swagger, providing a UI for users to interact with the API </li>
                        <li> Deployed to Google Cloud Platform’s App Engine, utilizing health endpoints to ensure API availability </li>
                    </ul>
                </Projects>

                <Projects
                    title="Stocker"
                    subtitle="A stocking app?"
                    img={null}
                    caption="A social media app for stock traders!"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Stocker"
                    icons={null}
                    backgroundColor={"#4834d4"}
                >
                    <ul>
                        <li> Developed a social media mobile app revolving around stock trading at SFU’s Mountain Madness Hackathon </li>
                        <li> Implemented a REST API using Express to perform CRUD operations on user information </li>
                        <li> Utilized Firebase to store user information and authenticate users using Google’s OAuth 2.0 </li>
                        <li> Implemented front end in Vue.js allowing users to view their portfolio, search for stocks, view stock information and interact with other users </li>
                        <li> Utilized Geolocation and Google Maps API to allow users to view others’ location and a stock API to allow users to search for stocks and view live stock information </li>
                    </ul>

                    <p> Stocker... stalker? </p>
                </Projects>

                <Projects
                    title="Maze of the Dead"
                    subtitle="A stocking app?"
                    img={null}
                    caption="A social media app for stock traders!"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Stocker"
                    icons={null}
                    backgroundColor={"#4834d4"}
                >
                    <ul>
                        <li> Developed a social media mobile app revolving around stock trading at SFU’s Mountain Madness Hackathon </li>
                        <li> Implemented a REST API using Express to perform CRUD operations on user information </li>
                        <li> Utilized Firebase to store user information and authenticate users using Google’s OAuth 2.0 </li>
                        <li> Implemented front end in Vue.js allowing users to view their portfolio, search for stocks, view stock information and interact with other users </li>
                        <li> Utilized Geolocation and Google Maps API to allow users to view others’ location and a stock API to allow users to search for stocks and view live stock information </li>
                    </ul>

                </Projects>

                <Projects
                    title="Coronavirus Tracker"
                    subtitle="Tracking the Pandemic"
                    img={covidTrackerImage}
                    caption="Visualizing and making COVID-19 information accessible"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Coronavirus-Tracker"
                    embed="https://sajantoor.github.io/Coronavirus-Tracker/"
                    icons={CoronavirusComponents}
                    backgroundColor={"#4834d4"}
                >
                    <ul>
                        <li>React</li>
                        <li>Deck.gl</li>
                        <li>Google Maps API</li>
                    </ul>
                </Projects>

                <Projects
                    title="VEX Robotics"
                    subtitle="Software Lead"
                    img={roboticsImg}
                    caption="Software Lead of VEX Robotics World Competition 2020 Qualified Team 4549A."
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
                    link="https://github.com/Sajantoor/Discord-Overwatch-Stats-Bot"
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
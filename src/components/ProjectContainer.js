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
// SAP 
import { ReactComponent as SpringBoot } from '../assets/logos/SpringBoot.svg';
import { ReactComponent as Rust } from '../assets/logos/Rust.svg';
import { ReactComponent as GoogleCloud } from '../assets/logos/GoogleCloud.svg';

import stockerImage from '../assets/img/Stocker.png';
import mazeOfDeadImage from '../assets/img/MazeOfTheDead.png';
import denyAndConquer from '../assets/img/denyAndConquer.png';

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

        // Java, Python, SpringGoot, Hystix, Selenium
        const SapIcons = [
            { link: "https://www.java.com/en/", component: <Java /> },
            { link: "https://spring.io/projects/spring-boot", component: <SpringBoot /> },
            { link: "https://github.com/Netflix/Hystrix", component: <img alt="Hystrix logo" src="https://raw.githubusercontent.com/wiki/Netflix/Hystrix/images/hystrix-logo.png" /> },
            { link: "https://www.selenium.dev/", component: <img alt="Selenium logo" src="https://www.selenium.dev/images/selenium_logo_square_green.png" /> },
        ]

        const blockchainIcons = [
            { link: "https://www.rust-lang.org/", component: <Rust /> },
        ]

        const leetCodeIcons = [
            { link: "https://www.java.com/en/", component: <Java /> },
            { link: "https://spring.io/projects/spring-boot", component: <SpringBoot /> },
            { link: "https://cloud.google.com/appengine", component: <GoogleCloud /> },
            { link: "https://swagger.io/", component: <img alt="Swagger logo" src="https://avatars.githubusercontent.com/u/7658037?s=200&v=4" /> },
        ]

        const stockerIcons = [
            { link: "https://vuejs.org/", component: <img alt="Vue logo" src="https://vuejs.org/images/logo.png" /> },
            { link: "https://firebase.google.com/", component: <img alt="Firebase logo" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" /> },
            { link: "https://expressjs.com/", component: <img alt="Express logo" src="https://expressjs.com/images/express-facebook-share.png" /> },
            { link: "https://nodejs.org/en/", component: <Node /> }
        ]

        const mazeOfDeadIcons = [
            { link: "https://www.java.com/en/", component: <Java /> },
            { link: "https://junit.org/junit5/", component: <img alt="JUnit logo" src="https://junit.org/junit5/assets/img/junit5-logo.png" /> }
        ]

        const denyAndConquerIcons = [
            { link: "https://www.java.com/en/", component: <Java /> },
        ]

        return (
            <div className="projectContainer" ref={this.myRef}>
                <Projects
                    title="SAP"
                    subtitle="Agile Developer Intern"
                    img="https://c2.staticflickr.com/2/1598/25795483104_63bf2e1d58_b.jpg"
                    caption="Jan 2022 - Sept 2022"
                    backgroundColor={"#4834d4"}
                    icons={SapIcons}
                >
                    <ul>
                        <li>Developed highly scalable and fault-tolerant microservices using Java, Spring Boot, JAX-RS, Apache, and Hystrix</li>
                        <li>Designed and developed a proof of concept for a new microservice to synthetic monitor the health of critical workflows for SAP Analytics Cloud, improving stability and reducing customer impact</li>
                        <li>Created alerting systems to notify on-call developers of issues before customers report them, ensuring low customer impact, using a variety of metrics such as response time and error rate</li>
                        <li>Improved the API response time of microservices by up to 60% by optimizing code, reducing the number of database calls, and caching data</li>
                        <li>Developed end-to-end UI based testing software to test key workflows in canary and production environments using Selenium, Python, and Jenkins, which allowed developers to identify and fix issues</li>
                        <li>Tested software functionality, performance, and scalability to ensure reliability using JUnit, Mockito, and JMeter</li>
                    </ul>
                </Projects>

                <Projects
                    title="UDP/IP Implementation"
                    img="https://prioritynetworks.ca/wp-content/uploads/2022/08/THE-Importance-of-computer-networking-2-scaled.jpg"
                    caption="A low level implementation of the UDP and IPv4 protocols in Rust"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/udp-implementation"
                    icons={blockchainIcons}
                    backgroundColor={"#332f35"}
                >
                    <ul>
                        <li>Engineered a robust low-level UDP/IP implementation with full support for IPv4 and UDP protocols</li>
                        <li>Orchestrated vital protocol functionalities such as checksum calculation and verification, packet fragmentation and reassembly, handling Time To Live (TTL), etc.</li>
                        <li>Utilized a TUN interface facilitating direct interaction with raw network layer packets from the kernel</li>
                        <li>Tested using Wireshark ensuring accurate transmission and reception of packets</li>
                    </ul>
                </Projects>

                <Projects
                    title="Deny and Conquer"
                    img={denyAndConquer}
                    caption="Multiplayer game in Java using TCP sockets"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Deny-And-Conquer-Game"
                    icons={denyAndConquerIcons}
                    backgroundColor={"#1e1e1e"}
                >
                    <ul>
                        <li>Developed a multiplayer game in Java Swing, where players compete to capture boxes on a grid</li>
                        <li>Designed a client-server architecture enabling concurrent gameplay, utilizing TCP sockets for communication</li>
                        <li>Established a robust messaging scheme for actions such as drawing, capturing, and releasing boxes allowing for communication between clients and the server</li>
                        <li>Used synchronized methods to manage player interactions, ensuring data integrity and preventing race conditions</li>
                        <li>Constructed server-side components to manage game state and player interactions, ensuring consistency for all players</li>
                    </ul>
                </Projects>

                <Projects
                    title="Blockchain"
                    subtitle="Proof of Work Blockchain"
                    img="https://www.chainalysis.com/wp-content/uploads/2022/02/bloggraphic-blockchains-01-1.png"
                    caption="A proof of work blockchain implemented in Rust"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/proof-of-work-blockchain"
                    icons={blockchainIcons}
                    backgroundColor={"#122149"}
                >
                    <ul>
                        <li>Developed a proof of work blockchain in Rust using SHA256 hashing and a work queue to mine blocks</li>
                        <li>Implemented a work queue using the consumer-producer pattern to allow for concurrent mining of blocks</li>
                    </ul>
                </Projects>

                <Projects
                    title="LeetCode API"
                    subtitle="Unofficial API orchestrator"
                    img="https://miro.medium.com/v2/resize:fit:1358/1*Z-B-f0HbvWSzH4cWntqBkQ.png"
                    caption="Unofficial API orchestrator for LeetCode"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/LeetCode-API"
                    icons={leetCodeIcons}
                    backgroundColor={"#2a2a2a"}
                >
                    <ul>
                        <li>Developed an API orchestrator, providing REST APIs for common LeetCode operations such as retrieving problems and submitting solutions using Java and Spring Boot</li>
                        <li>Utilized Apache HTTP Client to make HTTP requests to LeetCode’s REST and GraphQL APIs</li>
                        <li>Deployed to Google Cloud Platform’s App Engine, utilizing health endpoints to ensure API availability</li>
                        <li>Documented the API endpoints using Swagger, providing a UI for users to interact with the API</li>
                    </ul>
                </Projects>

                <Projects
                    title="Stocker"
                    subtitle="A stocking app?"
                    img={stockerImage}
                    caption="A social media app for stock traders!"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Stocker"
                    icons={stockerIcons}
                    backgroundColor={"#27ae60"}
                >
                    <ul>
                        <li>Developed a social media mobile app revolving around stock trading at SFU’s Mountain Madness Hackathon</li>
                        <li>Implemented a REST API to perform CRUD operations on user information, storing data in a Firebase database</li>
                        <li>Developed front-end in Vue.js, allowing users to interact with others, view their portfolio and view stock information with data provided from a stocks API</li>
                    </ul>

                    <p> Stocker... stalker? Haha get it? </p>
                </Projects>

                <Projects
                    title="Maze of the Dead"
                    img={mazeOfDeadImage}
                    caption="A 2D zombie inspired maze game"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Maze-Of-The-Dead"
                    icons={mazeOfDeadIcons}
                    backgroundColor={"#9d0000"}
                >
                    <ul>
                        <li>Created a 2D zombie inspired maze game where the player must navigate through a maze</li>
                        <li>Randomized the maze using Prim’s algorithm and placed entities such as enemies at random locations ensuring the maze was solvable using Breadth-first search</li>
                        <li>Utilized threads for concurrency for simultaneous rendering of the game and enemy and player movement</li>
                        <li>Followed test driven development, writing unit tests for each class and method using JUnit</li>
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
                    backgroundColor={"#151f2c"}
                >
                    <ul>
                        <li>Provided up-to-date and accessible information about COVID-19 cases and deaths per region</li>
                        <li>Visualized data on a map using scatterplot and heatmap layers and a simple UI to switch between layers, cases, deaths, and provides additional information such as case and death counts on hover</li>
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
                    backgroundColor={"#24242e"}
                >
                    <ul>
                        <li>Programmed custom robots to compete in an international and interschool robotics competition, ultimately qualified for the 2019-2020 season world championships, <strong>ranking 3rd in Canada out of 7200 teams</strong></li>
                        <li>Obtained feedback from several sensors such as cameras, potentiometers, gyroscopes, and encoders</li>
                        <li>Designed PID control algorithms for precise and smooth movements of various robot components</li>
                        <li>Implemented driver assist features such as automatic stacking and lift control, automating precise actions</li>
                        <li>Mentored new students, taught programming practices, debugging, and tools such as Git</li>
                    </ul>
                </Projects>

                <Projects
                    title="Rush Hour"
                    subtitle="Solving the Puzzle"
                    img={rushHourImg}
                    caption="Solving the puzzle Rush Hour using graphs and the A* traversal algorithm."
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Rush-Hour-Solver"
                    embed={null}
                    icons={RushHourComponents}
                    backgroundColor={"#292d2f"}
                >
                    <ul>
                        <li>Built a solver for the puzzle called Rush Hour, using several objects, data structures, and algorithms</li>
                        <li>Parsed a puzzle text file creating a state, projected all possible moves creating new states, traversed the states using A* until a solved state was found</li>
                        <li>Implemented sophisticated A* heuristics allowing the solver to find the optimal solution</li>
                    </ul>
                </Projects>

                <Projects
                    title="Discord Bot"
                    subtitle="Overwatch Stats Bot"
                    img={discordImg}
                    caption="A Discord Bot with fun commands and Overwatch Stats!"
                    link="https://github.com/Sajantoor/Discord-Overwatch-Stats-Bot"
                    linkText="View GitHub Repo"
                    embed="https://discord.com/oauth2/authorize?client_id=738876776112980098&permissions=124992&scope=bot"
                    icons={DiscordBot}
                    backgroundColor={"#2f3136"}
                >
                    <ul>
                        <li>Developed a Discord bot using TypeScript, Node.js, and Discord.js, allowing users to view their Overwatch stats</li>
                        <li>Used Discord.js to interact with the Discord API, allowing the bot to send and receive messages, obtain user information, and more</li>
                        <li>Utilized the Overwatch API to retrieve user stats, allowing users to view their stats for any hero</li>
                    </ul>
                </Projects>
            </div>
        )
    }
}

export default ProjectContainer;
import React from 'react';
// eslint-disable-next-line
import styles from '../styles/projectContainer.css';
import Projects from './Projects';
import beagleBoneBeatBoxImage from '../assets/img/BeagleBone-BeatBox.png';
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

        const sapFullTimeIcons = [
            { link: "https://www.java.com/en/", component: <Java /> },
            { link: "https://spring.io/projects/spring-boot", component: <SpringBoot /> },
            { link: "https://resilience4j.readme.io/docs/getting-started-3", component: <img alt="Resilience4j logo" src="https://avatars.githubusercontent.com/u/26137419?s=200&v=4" /> },
            { link: "https://projectreactor.io/", component: <img alt="Project Reactor logo" src="https://avatars.githubusercontent.com/u/4201559?s=200&v=4" /> },
            { link: "https://nodejs.org/en/", component: <Node /> }
        ]

        const sapInternIcons = [
            { link: "https://www.java.com/en/", component: <Java /> },
            { link: "https://spring.io/projects/spring-boot", component: <SpringBoot /> },
            { link: "https://github.com/Netflix/Hystrix", component: <img alt="Hystrix logo" src="https://raw.githubusercontent.com/wiki/Netflix/Hystrix/images/hystrix-logo.png" /> },
            { link: "https://www.selenium.dev/", component: <img alt="Selenium logo" src="https://www.selenium.dev/images/selenium_logo_square_green.png" /> },
        ]

        const securitySystemIcons = [
            { link: "https://isocpp.org/", component: <Cpp /> },
            { link: "https://cmake.org/", component: <img alt="CMake logo" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Cmake.svg" /> },
            { link: "https://www.linux.org/", component: <img alt="Linux logo" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" /> },
            { link: "https://valgrind.org/", component: <img alt="Valgrind logo" src="https://valgrind.org/images/st-george-dragon.png" /> },
            { link: "https://ffmpeg.org/", component: <img alt="FFmpeg logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/FFmpeg_Logo_new.svg" /> },
            { link: "https://nodejs.org/en/", component: <Node /> },
            { link: "https://socket.io/", component: <img alt="Socket.io logo" src="https://socket.io/images/logo.svg" /> },
        ]

        const beagleboneBeatboxIcons = [
            { link: "https://isocpp.org/", component: <Cpp /> },
            { link: "https://cmake.org/", component: <img alt="CMake logo" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Cmake.svg" /> },
            { link: "https://www.linux.org/", component: <img alt="Linux logo" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" /> },
            { link: "https://valgrind.org/", component: <img alt="Valgrind logo" src="https://valgrind.org/images/st-george-dragon.png" /> },
            { link: "https://nodejs.org/en/", component: <Node /> },
        ];

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
            { link: "https://expressjs.com/", component: <img alt="Express logo" src="https://avatars.githubusercontent.com/u/5658226?s=200&v=4" /> },
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
                    subtitle="Software Developer"
                    img="https://c2.staticflickr.com/2/1598/25795483104_63bf2e1d58_b.jpg"
                    caption="Jan 2025 - Present"
                    backgroundColor={"#4834d4"}
                    icons={sapFullTimeIcons}
                >
                    <ul>
                        <li>Developed cloud-native microservices <strong>handling millions of authentication, authorization, and routing requests</strong>, using Java, Spring Boot, Jakarta, Feign, Resilience4j, Hystrix, and Project Reactor, powering SAP infrastructure</li>
                        <li><strong>Reduced request latency by 70%</strong> through asynchronous and non-blocking operations using <strong>Project Reactor</strong></li>
                        <li>Resolved on-call issues by identifying root causes and deploying fixes, upholding SLAs and user satisfaction</li>
                        <li>Built a browser extension for 1-click access to customer logs and tenant info, <strong>cutting incident response time by 15%</strong></li>
                    </ul>
                </Projects>

                <Projects
                    title="SAP"
                    subtitle="Software Developer Intern"
                    img="https://c2.staticflickr.com/2/1598/25795483104_63bf2e1d58_b.jpg"
                    caption="May 2024 - Jan 2025 & Jan 2022 - Sept 2022"
                    backgroundColor={"#557dff"}
                    icons={sapInternIcons}
                >
                    <h4> May 2024 - Jan 2025</h4>
                    <ul>
                        <li>Engineered a full-stack feature to streamline Identity Provider (IdP) federation by developing and implementing new APIs in Java microservices and a JavaScript monolith, and developing a brand new user interface with SAPUI5</li>
                        <li>Achieved <strong>60% faster API responses</strong> using Caffeine cache, boosting throughput and reducing database load by 20%</li>
                        <li>Resolved a critical bug in the self-service SAML workflow preventing customers from logging in after configuring SAML SSO, by debugging complex authentication code and implementing a fix</li>
                        <li>Migrated a legacy JavaScript codebase to TypeScript improving maintainability and developer productivity by <strong>20%</strong></li>
                    </ul>
                    <h4> Jan 2022 - Sept 2022</h4>
                    <ul>
                        <li>Designed a Kubernetes-based synthetic monitoring microservice for performing health checks on critical workflows, utilized publisher-subscriber pattern and RabbitMQ as the message-broker, ultimately improved product's reliability</li>
                        <li>Enabled developers to quickly identify and address issues by developing an end-to-end UI-based testing software using Selenium, Python and Jenkins, <strong>reduced manual testing by 80%</strong></li>
                        <li>Minimized customer impact by proactively alerting on-call developers of issues by creating alert systems for key metrics such as error rate, <strong>saved 20% of their time</strong></li>
                    </ul>
                </Projects>

                <Projects
                    title="Security System"
                    img="https://private-user-images.githubusercontent.com/25991050/323735297-5345f525-55eb-4739-8802-8f293897ffd6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5NDcwMjEsIm5iZiI6MTc1MTk0NjcyMSwicGF0aCI6Ii8yNTk5MTA1MC8zMjM3MzUyOTctNTM0NWY1MjUtNTVlYi00NzM5LTg4MDItOGYyOTM4OTdmZmQ2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA4VDAzNTIwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4NzljOTRmYjBhZjk4OWFhNjgyYzBhOTJmYzY2OTcyMGQxN2M1ZDE5ZGVmYWNiMmU2ZTY1MDk2MzdiMjU4MTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.egZVLjLGGtWvpVuCo_TSLKF6ix5xenImkepD5OpiVnI"
                    caption="A security system leveraging the BeagleBone microcontroller"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/Embedded-Security-System"
                    icons={securitySystemIcons}
                    backgroundColor={"#d64b5b"}
                >
                    <ul>
                        <li>Led a team in the development of an embedded security system which monitors and controls access to a room leveraging the BeagleBone microcontroller</li>
                        <li>Integrated several hardware components such as a motorized lock utilizing GPIO and I2C for communication</li>
                        <li>Built a web app enabling real-time system monitoring and control, leveraging UDP sockets and WebSockets</li>
                        <li>Implemented a low latency video streaming server using FFmpeg and Node.js to stream video from the camera</li>
                    </ul>
                </Projects>

                <Projects
                    title="BeagleBone BeatBox"
                    img={beagleBoneBeatBoxImage}
                    caption="Filtering noise, amplifying clarity"
                    linkText="View GitHub Repo"
                    link="https://github.com/Sajantoor/BeagleBone-Beat-Box"
                    icons={beagleboneBeatboxIcons}
                    backgroundColor={"#1289A7"}
                >
                    <ul>
                        <li>Developed a beat-box application in C++ for the BeagleBone microcontroller, leveraging the ALSA API for real-time audio generation and low-latency playback of various beats</li>
                        <li>Integrated accelerometer input for air-drumming functionality, detecting accelerations to trigger sounds accurately</li>
                        <li>Implemented debounced joystick input for precise tempo and volume control via GPIO and I2C interfaces</li>
                        <li>Crafted a Node.js server to allow users to monitor and control the application via UDP sockets and WebSockets</li>
                        <li>Utilized CMake for cross-compilation on a Linux host and Valgrind for memory safety and leak prevention</li>
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
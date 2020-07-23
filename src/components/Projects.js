import React from 'react';
// eslint-disable-next-line
import styles from '../styles/projects.css';


class Projects extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            more: false,
        }
    }

    render() {
        return(
            <div className="projects">
                <div className="projectContain">
                    <h1 className={!this.state.more ? "projectTitle" : "titleMore" }> { this.props.title } </h1>
                    <h2 className={!this.state.more ? "projectSub" : "subMore" }> { this.props.subtitle } </h2>
                    
                    {this.state.more && 
                        <React.Fragment>
                            <p className="description"> {this.props.description} </p> 
                            <a href={this.props.link}> <button classsName="link"> {this.props.linkText} </button> </a>
                        </React.Fragment>
                    }

                    <div className="imgContain"> 
                        <img className={!this.state.more ? "img" : "imgMore"} src={this.props.img}/>
                    </div>
                </div>

                <div className="projectCaption">
                    {!this.state.more && 
                        <p className="caption"> {this.props.caption} </p> 
                    }
                    
                    <button className="embed"> {this.props.embed} </button>
                    
                    <button className="more" onClick={() => this.setState({more: !this.state.more})}> {!this.state.more ? "MORE" : "X"} </button>
                </div>
            </div>
        )
    }
}

export default Projects;
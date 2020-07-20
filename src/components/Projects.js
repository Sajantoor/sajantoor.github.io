import React from 'react';

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
                    <h1 className={!this.state.more ? "title" : "titleMore" }> { this.props.title } </h1> 
                    <h2 className={!this.state.more ? "title" : "titleMore" }> { this.props.subtitle } </h2>
                
                    <img src={this.props.img}/>
                    {this.state.more && 
                        <React.Fragment>
                            <p className="description"> {this.state.description} </p> 
                            <button classsName="link"> {this.props.link} </button> 
                        </React.Fragment>
                    }
                </div>

                <div className="projectCaption">
                    <p className="caption"> {this.props.caption} </p> 
                    <button className="embed"> {this.props.embed} </button>
                    <button className="more" onClick={() => this.setState({more: !this.state.more})}> {!this.state.more ? "MORE" : "X"} </button>
                </div>
            </div>
        )
    }
}

export default Projects;
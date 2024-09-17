import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import Button from "@material-ui/core/Button";

class Projects extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey: any) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        return (
            <div id="projects" >
                <div className="section-header ">
                    <span className="section-title">PhD Projects</span>
                </div>
                <div className="project-container">
                    <ul className="projects-grid">
                        <FadeInSection>
                            <Button href="https://dl.acm.org/doi/pdf/10.1145/3632620.3671100">
                                <li className="projects-card">
                                    <div className="card-header">
                                        <div className="folder-icon">
                                            <FolderOpenRoundedIcon
                                                style={{ fontSize: 35 }}
                                            ></FolderOpenRoundedIcon>
                                        </div>
                                    </div>
                                    <div className="card-titles">{"Exploring the impact of Assessment Policies on Marginalized Students' Experience in Post-Secondary Programming Courses"}</div>
                                </li>
                            </Button>
                        </FadeInSection>
                    </ul>
                </div>
            </div>

        );
    }
}


export default Projects;

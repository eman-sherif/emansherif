import React from "react";
import "../styles/Projects.css";
import FolderOpenRounded from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Button } from "@mui/material";

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
        const link = (
            <p>
                For a full list of publications, please visit my <a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/citations?user=kxpibVwAAAAJ&hl=en">Google Scholar</a> page.
            </p>

        );

        const assessment_policies = (
            <p>
                <b> Sherif, E.</b>, Everson, J., Kivuva, F. M., Kirdani-Ryan, M., & Ko, A. J. (2024, August).
                <b> Exploring the Impact of Assessment Policies on Marginalized Students' Experiences in Post-Secondary Programming Courses</b>.
                In Proceedings of the 2024 ACM Conference on International Computing Education Research-Volume 1 (pp. 233-245) <a target="_blank" rel="noopener noreferrer" href="https://dl.acm.org/doi/pdf/10.1145/3632620.3671100"> [pdf] </a>.
            </p>
        );

        const assessment_policies_desc = (
            <p>
                Our research reveals how rigid assessment policies in coding courses deepen inequities,
                hindering marginalized students’ sense of belonging and success in computer science.
            </p>
        )


        return (
            <div id="projects" >
                <div className="section-header ">
                    <span className="section-title">Select Publications</span>
                </div>
                <div className="projects-desc ">
                    {[link]}
                </div>

                <div className="publications">
                    {[assessment_policies]}
                </div>
                <div className="publications-desc">
                    {[assessment_policies_desc]}
                </div>





            </div>

        );
    }
}


export default Projects;

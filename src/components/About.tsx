import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
        const one = (
            <p>
                I am particularly interested in creating equitable and inclusive computer science assessments.
                I am interested in how current assessment practices create inequities for marginalized students
                and how to encourage the use of more equitable assessment practicies to mitigate these inequities. Moreover,
                I am interested in how to co-construct computer science assessment with students and how to scale this process in large
                classes.
            </p>
        );
        const two = (
            <p>
                Recently, I recieved the National Science Foundation gradate research fellowship
            </p>
        );


        return (
            <div id="about">
                <FadeInSection>
                    <div className="section-header ">
                        <span className="section-title">About Me</span>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {[one]}
                            {[two]}
                        </div>
                        <div className="about-image">
                            <img alt="Eman Sherif" src={"/assets/eman.png"} />
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default About;
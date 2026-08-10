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
                My research examines how computing education
                often overlooks the needs of marginalized students, leading many to internalize their struggles as personal failure and shame.
                I primarially do this by analyzing course policies, practices, and assessments and how this compromise fuels negative emotional experiences.
                Ultimately, I aim to reimagine computing learning environments as spaces co-designed with students, to reduce shame and address the inequities they face.

            </p>
        );
        const two = (
            <p>
                I have been honored to recieve the GEM fellowship, the UW College of Engineering
                Dean's Fellowship, and the National Science Foundation Gradate Research Fellowship to support this work.
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
                            <img alt="Eman Sherif" src={"/assets/eman.jpg"} />
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default About;
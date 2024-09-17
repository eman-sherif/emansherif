import React from "react";
import "../styles/Experience.css";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
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
            <div id="experience">
                <FadeInSection>
                    <div className="section-header ">
                        <span className="section-title">Experience</span>
                    </div>
                    <JobList></JobList>
                </FadeInSection>
            </div>
        );
    }
}

export default Experience;
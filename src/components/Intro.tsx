import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true,
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
            <div id="intro">
                <div className="intro-image">
                    <img alt="bismillah" src={"/assets/bismillah.png"} width={450} height={150} />
                </div>
                <Typist avgTypingDelay={200}>
                    <span className="intro-title">
                        {"Hi, I'm "}
                        <span className="intro-name">{"Eman."}</span>
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">It's nice to meet you!</div>
                    <div className="intro-desc">
                        I am currently a 3rd year PhD Student at
                        the University of Washington, Seattle advised by <a href="https://faculty.washington.edu/ajko/"> Amy Ko</a>. My research
                        interests are in equitable computer science education.
                    </div>
                    <a
                        href="mailto:emans@uw.edu"
                        className="intro-contact"
                    >
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {" Say hi!"}
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;
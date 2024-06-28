import React from 'react'
import Title from "../Title/Title";
import Card from 'react-bootstrap/Card';
import profile from "../../assets/G.jpeg";

import "./About.css";
import Collage from "./Collage";
import Abilities from "./Abilities";

const About = () => {
    const heading = ["Hi. I'm Gaia.", "A Software Engineer."];
    const subheading = "This is a subheading"
    return (
        <div className="about-container">
            <div className="title-section">
                <Title heading={heading} subheading={subheading}/>
            </div>
            <div className="bio grid">
                <div className="person">
                    <div className="person-content">
                        <div className="person-holder">
                            <div className="contents block">
                                <Card className="person-fig">
                                    <Card.Img src={profile} className="person-img"/>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blurb">
                    <h2 className="intro">
                        {"I'm a Software Engineer based out of Southern California."}
                    </h2>
                    <p>
                        {"Here is other stuff about me"}
                    </p>
                </div>
            </div>

            <Abilities/>

            <div className="grid info">
                <div className="item info">
                    <p>Here is some more about me. Here is some more about me. Here is some more about me.</p>
                    <p>Here is some more personal things</p>
                    <p>Here is stuff about travel</p>
                </div>
            </div>

            <Collage/>
        </div>
    )
}
export default About

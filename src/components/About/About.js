import React from 'react'
import Title from "../Title/Title";
import Card from 'react-bootstrap/Card';
import profile from "../../assets/G.jpeg";
import { bio, bioTwo } from '../../constants/constants';

import "./About.css";
import Collage from "./Collage";
import Abilities from "./Abilities";

const About = () => {
    const heading = ["Hi. I'm Gaia.", "A Software Engineer."];
    const subheading = "This is a subheading"
    const paragraphs = bio.split('\n').map((text, index) => <p key={index}>{text}</p>);
    const secondParagraphs = bioTwo.split('\n').map((text, index) => <p key={index}>{text}</p>);

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
                    {paragraphs}
                </div>
            </div>

            <Abilities/>

            <div className="grid info">
                <div className="item info">
                    {secondParagraphs}
                </div>
            </div>

            <Collage/>
        </div>
    )
}
export default About

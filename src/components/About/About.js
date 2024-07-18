import React from 'react'
import Title from '../Title/Title'
import Card from 'react-bootstrap/Card'
import {motion} from 'framer-motion'
import profile from '../../assets/G.jpeg'
import {bio, bioTwo} from '../../constants/constants'

import './About.css'
import Collage from './Collage'
import Abilities from './Abilities'

const About = () => {
    const heading = ["Hi. I'm Gaia.", "A Software Engineer."];
    const subheading = "I am a passionate and driven developer in the early stages of my career, eager to tackle" +
        " exciting projects, explore innovative technologies, and thrive in collaborative team environments."
    const paragraphs = bio.split('\n').map((text, index) => <p key={index}>{text}</p>);
    const secondParagraphs = bioTwo.split('\n').map((text, index) => <p key={index}>{text}</p>);

    return (
        <div className="about-container">

            <div className="title-section">
                <Title heading={heading} subheading={subheading}/>
            </div>
            <div className="overflow-hidden">
                <motion.div
                    initial={{y: "-20%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0}}
                >

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

                </motion.div>
            </div>
        </div>
    )
}
export default About

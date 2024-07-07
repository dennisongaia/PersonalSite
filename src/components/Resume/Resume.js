import React from 'react'
import Title from "../Title/Title"
import { experiences, skills } from '../../constants/constants'
import './Resume.css'
import Experience from "./Experience";
import Skill from "./Skill";

const heading = ["Resume."]
const subheading = `Here's a little bit about my skills & experience.`

const Resume = () => {
    return (
        <>
            <Title heading={heading} subheading={subheading}/>
            {experiences.map((item) =>
                (
                   <Experience item={item}/>
                )
            )}
            <div className="resume-skills">
                <div className="skills-content">
                    {skills.map((skill, index) => (
                        <div className={`'skills-'${index % 2 === 0 ? '1' : '2'}`}>
                            <Skill skill={skill}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Resume

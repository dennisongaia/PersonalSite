import React from 'react'
import {motion} from 'framer-motion'
import Title from '../Title/Title'
import {experiences, skills} from '../../constants/constants'
import './Resume.css'
import Experience from './Experience'
import Skill from './Skill'

const heading = ["Resume."]
const subheading = `Here's a little bit about my skills & experience.`

const Resume = () => {
    return (
        <>
            <Title heading={heading} subheading={subheading}/>

            <div className="overflow-hidden">
                <motion.div
                    initial={{y: "-20%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0}}
                >
                    {experiences.map((item) =>
                        (
                            <Experience item={item}/>
                        )
                    )}
                    <div className="resume-skills">
                        <div className="skills-content">
                            {skills.map((skill, index) => (
                                <div className={`skills-${index % 2 === 0 ? '1' : '2'}`}>
                                    <Skill skill={skill}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default Resume

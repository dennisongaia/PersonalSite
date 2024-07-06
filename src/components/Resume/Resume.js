import React from 'react'
import Title from "../Title/Title"
import { experiences } from '../../constants/constants'
import './Resume.css'
import Experience from "./Experience";

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
        </>
    )
}
export default Resume

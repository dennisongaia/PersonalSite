import React from 'react'
import {motion} from 'framer-motion'
import Title from '../Title/Title'
import plotAIimg from '../../assets/work/plot-ai.png'
import studentCalendar from '../../assets/work/studentCalendar.png'
import game from '../../assets/work/game-3.gif'
import RIFLE from '../../assets/work/RIFLE.png'

import './Work.css'

const heading = ["Work."]
const subheading = "Here are some projects I've worked on."

const pinkStyle = {
    display: 'contents',
    '--background': 'var(--color-pink)',
    '--color': 'var(--color-text-bold)',
    '--grid-column-start': 1,
    '--grid-column-end': 10,
}

const mintStyle = {
    display: 'contents',
    '--background': 'var(--color-mint)',
    '--color': 'var(--color-text-bold)',
    '--grid-column-start': 11,
    '--grid-column-end': 26,
}

const rustStyle = {
    display: 'contents',
    '--background': 'var(--color-rust)',
    '--color': 'var(--color-text-bold)',
    '--grid-column-start': 1,
    '--grid-column-end': 16,
}

const blueStyle = {
    display: 'contents',
    '--background': 'var(--color-babyblue)',
    '--color': 'var(--color-text-bold)',
    '--grid-column-start': 17,
    '--grid-column-end': 26,
}

const Work = () => {
    return (
        <>
            <Title heading={heading} subheading={subheading}/>
            <div className="overflow-hidden">
                <motion.div
                    initial={{y: "-20%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0}}
                >
                    <div className="cards">
                        <div className="cards-content">
                            <div style={pinkStyle}>
                                <a href="https://github.com/codangz/Student-Calendar" className="cardd">
                                    <div className="card-wrap tag">
                                        <div className="card-info tag">
                                    <span className="card-title tag">
                                        Student Project
                                    </span>
                                            <h2>
                                                Student Calendar
                                            </h2>
                                        </div>
                                        <div className="card-inner tag">
                                            <div className="image-holder">
                                                <figure className="image-fig">
                                                    <img src={studentCalendar} alt="Calendar" width="810" height="422"
                                                         loading="lazy" className="image"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div style={mintStyle}>
                                <div href="https://github.com/ai-hackathon-team-23/plot-ai" className="cardd">
                                    <div className="card-wrap tag">
                                        <div className="card-info tag">
                                    <span className="card-title tag">
                                        Second place at the AI2 Hackathon
                                    </span>
                                            <h2>
                                                PlotAI
                                            </h2>
                                        </div>
                                        <div className="card-inner tag">
                                            <div className="image-holder">
                                                <figure className="image-fig">
                                                    <img src={plotAIimg} alt="PlotAI" width="1000" height="600"
                                                         loading="lazy" className="image"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={rustStyle}>
                                <div href="https://github.com/AndyCChen/Downtown-Delivery" className="cardd">
                                    <div className="card-wrap tag">
                                        <div className="card-info tag">
                                    <span className="card-title tag">
                                        Student Project
                                    </span>
                                            <h2>
                                                Downtown Delivery
                                            </h2>
                                        </div>
                                        <div className="card-inner tag">
                                            <div className="image-holder">
                                                <figure className="image-fig">
                                                    <img src={game} alt="Game" width="800" height="575"
                                                         className="image"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={blueStyle}>
                                <div href="https://github.com/optimization-for-data-driven-science/RIFLE"
                                     className="cardd">
                                    <div className="card-wrap tag">
                                        <div className="card-info tag">
                                    <span className="card-title tag">
                                        Undergraduate Research
                                    </span>
                                            <h2>
                                                RIFLE
                                            </h2>
                                        </div>
                                        <div className="card-inner tag">
                                            <div className="image-holder">
                                                <figure className="image-fig">
                                                    <img src={RIFLE} alt="RIFLE" width="810" height="422" loading="lazy"
                                                         className="image"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default Work

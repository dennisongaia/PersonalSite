import React from 'react'
import {motion} from 'framer-motion'
import starOne from '../../assets/star-1.svg'

import './Title.css'
import './index.css'

const Title = ({heading, subheading}) => {
    return (
        <>
            <h1 className="title-element">
            <span slot="title" className="gaia-title">
                <motion.h1
                    initial={{y: "-50%",  opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.1}}
                >
                    {heading.map((header, index) => (
                        <span className="holder gaia-title">
                        <span className="holder-content gaia-title">
                            {header}
                            <span className={`stars ${index === 0 ? 'right' : 'left'} gaia-title`}>
                                <motion.figure
                                    initial={{scale: 0}}
                                    animate={{scale: 1, rotate: 360}}
                                    transition={{duration: 1.5, delay: 0.1}}
                                >
                                <figure className="relative m-0">

                                        <img src={starOne} alt="Star"/>

                                </figure>
                                </motion.figure>
                            </span>
                        </span>
                    </span>
                    ))}
                </motion.h1>
            </span>
            </h1>
            {subheading &&
                <div className="wrapper subtitle">
                    <p className="center subtitle">
                        <motion.div
                            initial={{y: "-100%", opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.4, delay: 0.1}}
                        >
                            {subheading}
                        </motion.div>
                    </p>
                </div>
            }
        </>
    )
}
export default Title

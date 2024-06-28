import React from 'react'
import starOne from '../../assets/star-1.svg';

import './Title.css'
import './index.css';

const Title = ({ heading, subheading }) => {
    return (
        <>
        <h1 className="title-element">
            <span slot="title" className="gaia-title">
                {heading.map((header, index) => (
                    <span className="holder gaia-title">
                    <span className="holder-content gaia-title">
                        {header}
                        <span className={`stars ${index === 0 ? 'right' : 'left'} gaia-title`}>
                            <figure className="relative m-0">
                                <img src={starOne} alt="Star" />
                            </figure>
                        </span>
                    </span>
                </span>
                ))}
            </span>
        </h1>
        { subheading &&
            <div className="wrapper subtitle">
                <p className="center subtitle">
                    {subheading}
                </p>
            </div>
        }
        </>
    )
}
export default Title

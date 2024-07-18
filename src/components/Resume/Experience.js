import React, {useState} from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import {ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons'

const Experience = ({item}) => {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible.Root className="experience-holder" open={open} onOpenChange={setOpen}>
            <div className="experience">
                <div className="experience-block">
                    <div className="experience-inner">
                        <div className="experience-content">
                            <div className="experience-title-wrap">
                                <div className="experience-title">
                                    {item.title}
                                </div>
                                <Collapsible.Trigger asChild>
                                    <button>
                                        {open ? (<ChevronUpIcon className="experience-icon"/>) : (
                                            <ChevronDownIcon className="experience-icon"/>)}
                                    </button>
                                </Collapsible.Trigger>
                            </div>
                            <div className="experience-info">
                                        <span className="experience-company">
                                            {item.company}
                                        </span>
                                <span className="experience-date">
                                            {item.start} - {item.end}
                                        </span>
                            </div>
                            <Collapsible.Content>
                                <ul className="experience-description">
                                    {item.description.split('\n').map((line, index) => (
                                        <li className="experience-item" key={index}
                                            style={{marginLeft: line.startsWith('\t') ? '20px' : '0'}}>
                                            {line.startsWith('\t') ? line.substring(1) : line}
                                        </li>
                                    ))}
                                </ul>
                            </Collapsible.Content>
                        </div>
                    </div>
                </div>
            </div>
        </Collapsible.Root>
    )
}
export default Experience

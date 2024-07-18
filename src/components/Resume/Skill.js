import React from 'react'
import * as Progress from '@radix-ui/react-progress'

const Skill = ({skill}) => {
    const [progress, setProgress] = React.useState(skill.percent);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(100 - skill.percent), 500);
        return () => clearTimeout(timer);
    }, );

    return (
        <div className="skill-wrap">
            <div className="skill-image-wrap">
                <img alt={skill.skill} src={skill.image} className="skill-image"/>
            </div>
            <div className="skill-info-wrap">
                <div className="skill-title">
                    {skill.skill}
                </div>
                <Progress.Root className="skill-progress" value={progress}>
                    <Progress.Indicator
                        className="skill-indicator"
                        style={{transform: `translateX(-${100 - progress}%)`}}
                    />
                </Progress.Root>
            </div>
        </div>
    )
}
export default Skill

import React from 'react'
import Card from 'react-bootstrap/Card';

import {collageData} from "../../constants/constants";

const getRandomIndices = (length, count) => {
    const indices = new Set();
    while (indices.size < count) {
        const randomIndex = Math.floor(Math.random() * length);
        indices.add(randomIndex);
    }
    return Array.from(indices);
};

const Collage = () => {
    const randomIndices = getRandomIndices(collageData.length, 4);
    const selectedData = randomIndices.map(index => collageData[index]);

    return (
        <div className="collage">
            <div className="collage-content">
                {selectedData.map((item, index) => (
                    <Card className="collage-holder">
                        <Card.Img src={item.image} className="collage-img"/>
                        <div className="caption">{item.location}</div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default Collage

import React from 'react'
import './Gears.css'
import GearsGroupRight from './GearsGroupRight/GearsGroupRight';
import GearsGroupLeft from './GearsGroupLeft/GearsGroupLeft';

const Gears = () => {
    return (
        <div className="gearsWrapper">
            <GearsGroupLeft />
            <GearsGroupRight />
        </div>
    );
}

export default Gears;
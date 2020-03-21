import React from 'react'
import './GearsGroupRight.css'
import smallGear from '../../../../../assets/images/smallGear.svg'
import mediumGear from '../../../../../assets/images/mediumGear.svg'
import bigGear from '../../../../../assets/images/bigGear.svg'

const GearsGroupRight = () => {
    return (
        <div className="gearsGroupRight">
            <div className="smallGear">
                <img src={smallGear} alt=""/> 
            </div>
            <div className="mediumGear">
                <img src={mediumGear} alt=""/> 
            </div>
            <div className="bigGear">
                <img src={bigGear} alt=""/> 
            </div>
        </div>
    );
}

export default GearsGroupRight;
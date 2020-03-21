import React from 'react'
import './GearsGroupRight.css'
import smallGear from '../../../../../assets/images/smallGear.svg'
import mediumGear from '../../../../../assets/images/mediumGear.svg'
import bigGear from '../../../../../assets/images/bigGear.svg'
import { ScrollRotate } from 'react-scroll-rotate'

const GearsGroupRight = () => {
    return (
        <div className="gearsGroupRight">
            <div className="smallGear">
                <ScrollRotate from={1} to={359} >
                    <img src={smallGear} alt="" />
                </ScrollRotate>
            </div>
            <div className="mediumGear">
                <ScrollRotate from={359} to={1} >
                    <img src={mediumGear} alt="" />
                </ScrollRotate>
            </div>
            <div className="bigGear">
                <ScrollRotate from={359} to={1}>
                    <img src={bigGear} alt="" />
                </ScrollRotate>
            </div>
        </div>
    );
}

export default GearsGroupRight;
import React from 'react'
import './BigBanner.css'

const BigBanner = (props) => {
    return (
        <div className='bigBanner'>
            <div className='bigBannerFirstLine'>{props.firstline}</div>
            <div className='bigBannerLine'></div>
            <div className='bigBannerSecondLine'>{props.secondline}</div>
        </div>
    );
}

export default BigBanner;
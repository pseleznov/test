import React from 'react'
import './SmallBanner.css'

const SmallBanner = (props) => {
    return (
        <div className='smallBanner'>
            <div className="smallBannerText">{props.text}</div>
            <div className="smallBannerLine"></div>
        </div>
    );
}

export default SmallBanner;
import React from 'react'
import './AdaptiveBanner.css'

const AdaptiveBanner = (props) => {
    return (
        <div className={props.banner.position}>
            <div className="AdaptiveBannerText">
                <div className="ABT-head">{props.banner.text.head}</div>  
                <div className="ABT-main">{props.banner.text.main}</div>
            </div>
            <div className='AdaptiveBannerLine'></div>
        </div>
    );
}

export default AdaptiveBanner;
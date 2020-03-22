import React from 'react'
import './ThirdPart.css'
import BodyHeader from '../BodyHeader/BodyHeader'
import AdaptiveBanner from '../../Banners/AdaptiveBanner/AdaptiveBanner'


const ThirdPart = (props) => {
    return (
        <div className='thirdPartWrapper'>
            <BodyHeader header={props.headers} />
            <div className='thirdPartMainContent'>
                <div className='topPicture'>
                    <AdaptiveBanner banner={props.topBanner} />
                    <img src={props.topBanner.image} alt=""/>
                </div>
                <div className='bottomPicture'>
                    <AdaptiveBanner banner={props.bottomBanner} />
                    <img src={props.bottomBanner.image} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ThirdPart;
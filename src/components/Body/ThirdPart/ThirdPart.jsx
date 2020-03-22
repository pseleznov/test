import React from 'react'
import './ThirdPart.css'
import BodyHeader from '../BodyHeader/BodyHeader'
import topPicture from '../../../assets/images/topPicture.jpg'
import AdaptiveBanner from '../../Banners/AdaptiveBanner/AdaptiveBanner'


const ThirdPart = (props) => {
    return (
        <div className='thirdPartWrapper'>
            <BodyHeader header={props.headers} />
            <div className='thirdPartMainContent'>
                <div className='topPicture'>
                    <AdaptiveBanner position='left' />
                    <img src={topPicture} alt=""/>
                </div>
                <div className='bottomPicture'>
                    <AdaptiveBanner position='right' />
                    <img src={topPicture} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ThirdPart;
import React from 'react'
import './FirstPart.css'
import BigBanner from '../../Banners/BigBanner/BigBanner'
import SliderContainer from './Slider/SliderContainer';

const FirstPart = () => {
    return (
        <div className='FirstPart'>
            <SliderContainer />
            <BigBanner />
        </div>
    );
}

export default FirstPart;
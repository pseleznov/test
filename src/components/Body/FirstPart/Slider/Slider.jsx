import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'
import BigBannerContainer from '../../../Banners/BigBanner/BigBannerContainer';

const Slider = (props) => {
    return (
        <div className='slider'>
            <Carousel emulateTouch>
                <div>
                    <img src={props.image[0]} alt=""/>
                </div>
                <div>
                    <img src={props.image[2]} alt=""/>
                </div>
                <div>
                    <img src={props.image[1]} alt=""/>
                </div>
                <div>
                    <img src={props.image[2]} alt=""/>
                </div>
            </Carousel>
            <BigBannerContainer />
        </div>
    );
};

export default Slider;
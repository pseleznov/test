import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'
import BigBanner from '../../../Banners/BigBanner/BigBanner';

const Slider = (props) => {
    return (
        <div>
            <Carousel emulateTouch>
                <div>
                    <img src={props.image[0]} />
                </div>
                <div>
                    <img src={props.image[0]} />
                </div>
                <div>
                    <img src={props.image[0]} />
                </div>
            </Carousel>
            <BigBanner />
        </div>
    );
};

export default Slider;
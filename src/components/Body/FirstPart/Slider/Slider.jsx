import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'

const Slider = (props) => {
        return (
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
        );
};

export default Slider;
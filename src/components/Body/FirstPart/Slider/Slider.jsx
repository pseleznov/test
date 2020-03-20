import React from 'react'
import './Slider.css'

const Slider = (props) => {
  
    return (
        <div className='slider'>
            <div className='sliderPicture'>
                <img src={props.image} alt=""/>
            </div>
            <div className='sliderRoute'>
            <div>
                <button onClick={props.setPicture()}>{props.id}</button>
            </div>
            <div>
                <button>O</button>
            </div>            
            <div>
                <button>O</button>
            </div>            
            <div>
                <button>O</button>
            </div>
            </div>
        </div>
    )
}

export default Slider;
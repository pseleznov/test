import React from 'react'
import './SecondPart.css'
import BodyHeader from '../BodyHeader/BodyHeader'

const SecondPart = (props) => {
    return (
        <div className='secondPartWrapper'>
            <BodyHeader header={props.headers[0]}/>
            <div className='gears'></div>
            <div className='grid'></div>
            <button className='calc'></button>
        </div>
    );
}

export default SecondPart;
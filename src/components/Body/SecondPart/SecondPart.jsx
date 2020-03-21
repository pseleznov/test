import React from 'react'
import './SecondPart.css'
import BodyHeader from '../BodyHeader/BodyHeader'
import Gears from './Gears/Gears';
import Grid from './Grid/Grid';

const SecondPart = (props) => {
    return (
        <div className='secondPartWrapper'>
            <Gears />
            <div className='secondPartMainContent'>
                <BodyHeader header={props.headers} />
                <Grid smallBanner={props.smallBanner} />
                <button className='button'>
                    <div className="forComp">{props.buttonText[0]}</div>  
                    <div className="forPhone">{props.buttonText[1]}</div>
                </button>
            </div>
        </div>
    );
}

export default SecondPart;
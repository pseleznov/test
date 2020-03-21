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
                <Grid />
                <button className='calc'>hjhjghjg</button>
            </div>
        </div>
    );
}

export default SecondPart;
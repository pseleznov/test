import React from 'react'
import  './Body.css'
import FirstPart from './FirstPart/FirstPart'
import BodyHeader from './BodyHeader/BodyHeader'

const Body = (props) => {

    return (
        <div className="bodyWrapper">
            <FirstPart />
            <BodyHeader header={props.headers[0]}/>
        </div>
    );
}

export default Body;
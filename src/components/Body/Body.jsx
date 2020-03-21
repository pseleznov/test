import React from 'react'
import  './Body.css'
import FirstPart from './FirstPart/FirstPart'
import BodyHeader from './BodyHeader/BodyHeader'

const Body = (props) => {
    return (
        <div className="bodyWrapper">
            <FirstPart />
            <BodyHeader header='Услуга'/>
        </div>
    );
}

export default Body;
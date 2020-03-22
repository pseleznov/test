import React from 'react'
import  './Body.css'
import FirstPart from './FirstPart/FirstPart'
import SecondPart from './SecondPart/SecondPart'
import ThirdPart from './ThirdPart/ThirdPart'

const Body = (props) => {

    return (
        <div className="bodyWrapper">
            <FirstPart />
            <SecondPart 
                headers={props.headers[0]}
                smallBanner={props.smallBanner}
                buttonText={props.buttonText} 
            />
            <ThirdPart 
                headers={props.headers[1]}
            />
        </div>
    );
}

export default Body;
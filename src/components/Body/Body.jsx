import React from 'react'
import  './Body.css'
import FirstPart from './FirstPart/FirstPart'
import SecondPart from './SecondPart/SecondPart'

const Body = (props) => {

    return (
        <div className="bodyWrapper">
            <FirstPart />
            <SecondPart 
                headers={props.headers[0]}
                smallBanner={props.smallBanner}
                buttonText={props.buttonText} 
            />
            

        </div>
    );
}

export default Body;
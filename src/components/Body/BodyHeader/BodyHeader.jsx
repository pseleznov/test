import React from 'react'
import './BodyHeader.css'

const BodyHeader = (props) => {
    return (
        <div className="bodyHeader">
            <div className="bodyHeaderText">{props.header}</div>
        </div>
    )
}

export default BodyHeader;
import React from 'react'
import  './HeaderPicture.css'
import userPicture from '../../../assets/images/userPicture.png'

const HeaderPicture = (props) => {
    return (
        <div className="userPicture">
            <img src={undefined || userPicture} alt=""/>
        </div>
    );
}

export default HeaderPicture;
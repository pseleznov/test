import React from 'react'
import  './Header.css'
import HeaderPicture from './HeaderPicture/HeaderPicture';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderFeatures from './HeaderFeatures/HeaderFeatures';
import HeaderLanguage from './HeaderLanguage/HeaderLanguage';

const Header = (props) => {
    return (
        <div className="headerWrapper">
            <HeaderPicture />
            <HeaderMenu 
                currentData={props.currentData}
                setLanguage={props.setLanguage} 
            />
            <HeaderFeatures search={props.currentData[6]} />
            <HeaderLanguage setLanguage={props.setLanguage} />
        </div>
    );
}

export default Header;
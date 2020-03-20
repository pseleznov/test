import React from 'react'
import  './Header.css'
import HeaderPicture from './HeaderPicture/HeaderPicture';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderFeatures from './HeaderFeatures/HeaderFeatures';

const Header = () => {
    return (
        <div className="headerWrapper">
            <HeaderPicture />
            <HeaderMenu />
            <HeaderFeatures />
        </div>
    );
}

export default Header;
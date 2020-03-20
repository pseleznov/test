import React from 'react'
import  './Header.css'
import HeaderPicture from './HeaderPicture/HeaderPicture';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderFeatures from './HeaderFeatures/HeaderFeatures';
import HeaderLanguage from './HeaderLanguage/HeaderLanguage';

const Header = () => {
    return (
        <div className="headerWrapper">
            <HeaderPicture />
            <HeaderMenu />
            <HeaderFeatures />
            <HeaderLanguage />
        </div>
    );
}

export default Header;
import React from 'react'
import  './Header.css'
import HeaderPicture from './HeaderPicture/HeaderPicture';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
    return (
        <div className="headerWrapper">
            <HeaderPicture />
            <HeaderMenu />
            <div>search</div>
        </div>
    );
}

export default Header;
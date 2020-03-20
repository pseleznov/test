import React from 'react'
import './HeaderMenu.css'
import { NavLink } from 'react-router-dom'
import vector from '../../../assets/images/Vector.svg'

const HeaderMenu = () => {
    return (
        <div className="headerMenu">
            <div className="headerMenuItem">
                <div>
                    <NavLink to='/homepage' activeClassName='active'>Главная</NavLink>
                    <div className='headerMenuItem_underline'></div>
                </div>
            </div>
            <div className="headerMenuLine"></div>
            <div className="headerMenuItem">
                <div className='headerMenuItemServ'>
                    <div>
                        <NavLink to='/services' activeClassName='active'>Услуги</NavLink>
                        <div className='headerMenuItem_underline'></div>
                    </div>
                    <div className='vector-img'>
                        <img src={vector} alt="" />
                    </div>
                </div>
            </div>
            <div className="headerMenuLine"></div>
            <div className="headerMenuItem">
                <div>
                    <NavLink to='/ourwork' activeClassName='active'>Наши работы</NavLink>
                    <div className='headerMenuItem_underline'></div>
                </div>
            </div>
            <div className="headerMenuLine"></div>
            <div className="headerMenuItem">
                <div>
                    <NavLink to='aboutus' activeClassName='active'>О нас</NavLink>
                    <div className='headerMenuItem_underline'></div>
                </div>
            </div>
            <div className="headerMenuLine"></div>
            <div className="headerMenuItem">
                <div>
                    <NavLink to='contacts' activeClassName='active'>Контакты</NavLink>
                    <div className='headerMenuItem_underline'></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;
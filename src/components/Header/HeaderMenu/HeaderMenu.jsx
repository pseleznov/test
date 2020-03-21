import React from 'react'
import './HeaderMenu.css'
import { NavLink } from 'react-router-dom'
import vector from '../../../assets/images/Vector.svg'
import vectorForPhone from '../../../assets/images/VectorForPhone.svg'

const state = [
    'Главная',
    'Меню'
];

const BurgerOn = {
    on: false
}


const HeaderMenu = () => {
    return (
        <div className='burgerMenu'>
            <input type='checkbox' id='a1' className='checkbox' />
            <label htmlFor='a1' className='burgerLabel'>
                <span>
                    <div></div>
                </span>
            </label>   
            <div className="headerMenu">
                <div className="headerMenuItem">
                    <div className="forComp">
                        <NavLink to='/homepage' activeClassName='active'>Главная</NavLink>
                        <div className='headerMenuItem_underline'></div>
                    </div>
                    <div className="forPhone">
                        <NavLink to='/homepage' activeClassName='active'>Меню</NavLink>
                    </div>
                </div>
                <div className="headerMenuLine"></div>
                <div className="headerMenuItem">
                    <div className='headerMenuItemServ'>
                        <div>
                            <NavLink to='/services' activeClassName='active'>Услуги</NavLink>
                            <div className='headerMenuItem_underline'></div>
                        </div>
                        <div className='vectorImg'>
                            <img src={vector} alt="" />
                        </div>
                        <div className='vectorForPhone'>
                            <img src={vectorForPhone} alt="" />
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
        </div>
    );
}

export default HeaderMenu;
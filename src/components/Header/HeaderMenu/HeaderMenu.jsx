import React from 'react'
import './HeaderMenu.css'
import { NavLink } from 'react-router-dom'
import vector from '../../../assets/images/Vector.svg'
import vectorForPhone from '../../../assets/images/VectorForPhone.svg'
import UkraineFlag from '../../../assets/images/Flag_of_Ukraine.svg'
import RussiaFlag from '../../../assets/images/Flag_of_Russia.svg'
import United_KingdomFlag from '../../../assets/images/Flag_of_the_United_Kingdom.svg'



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
                        <div className="languages">
                            <div><img src={RussiaFlag} alt=""/></div>
                            <div><img src={UkraineFlag} alt=""/></div>
                            <div><img src={United_KingdomFlag} alt=""/></div>
                        </div>
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
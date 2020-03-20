import React from 'react'
import './HeaderFeatures.css'
import search from '../../../assets/images/search.svg'

const HeaderFeatures = () => {
    return (
        <div className="headerFeatures">
             <div className="form-hidden">
                <input id='search' type="text" placeholder='Поиск' required />
                <label htmlFor='search'>
                    <img src={search} alt="" />
                </label>
            </div>
            <div className="languageBar">
                UA
            </div>
        </div>
    );
}

export default HeaderFeatures;
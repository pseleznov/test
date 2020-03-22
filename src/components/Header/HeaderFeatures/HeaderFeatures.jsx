import React from 'react'
import './HeaderFeatures.css'
import search from '../../../assets/images/search.svg'

const HeaderFeatures = (props) => {
    return (
        <div className="headerFeatures">
             <div className="form-hidden">
                <input id='search' type="text" placeholder={props.search} required />
                <label htmlFor='search'>
                    <img src={search} alt="" />
                </label>
            </div>
        </div>
    );
}

export default HeaderFeatures;
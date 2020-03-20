import React from 'react';
import './HeaderLanguage.css';
import flag from '../../../assets/images/Flag_of_Russia.svg';
import vector from '../../../assets/images/Vector.svg';


const HeaderLanguage = () => {
    return (
        < div className="languageBar" >
            <div className="flag">
                <img src={flag} alt=""/>
            </div>
            <div className="vectorImg">
                <img src={vector} alt=""/>
            </div>
        </div >
    );
}

export default HeaderLanguage;
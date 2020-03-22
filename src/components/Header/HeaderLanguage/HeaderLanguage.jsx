import React from 'react';
import './HeaderLanguage.css';
import Russiaflag from '../../../assets/images/Flag_of_Russia.svg';
import Ukraineflag from '../../../assets/images/Flag_of_Ukraine.svg';
import UK from '../../../assets/images/Flag_of_the_United_Kingdom.svg';
import vector from '../../../assets/images/Vector.svg';


const HeaderLanguage = () => {
    return (
        < div className="languageBar" >
            <div className="flag">
                <img src={Russiaflag} alt="" />
            </div>
            <div className="vectorImg">
                <img src={vector} alt="" />
            </div>
            <div className="vypadashka">
                <div className="flag">
                    <img src={Ukraineflag} alt="" />
                </div>
                <div className="flag">
                    <img src={UK} alt="" />
                </div>
            </div>
        </div >
    );
}

export default HeaderLanguage;
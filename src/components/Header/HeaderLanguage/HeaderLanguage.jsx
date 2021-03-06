import React from 'react';
import './HeaderLanguage.css';
import Russiaflag from '../../../assets/images/Flag_of_Russia.svg';
import Ukraineflag from '../../../assets/images/Flag_of_Ukraine_main.png';
import UK from '../../../assets/images/Flag_of_the_United_Kingdom_main.png';
import vector from '../../../assets/images/Vector.svg';



const HeaderLanguage = (props) => {

    const languageRuToggle = () => {
        props.setLanguage('ru');
    }
    const languageUaToggle = () => {
        props.setLanguage('ua');
    }
    const languageEngToggle = () => {
        props.setLanguage('eng');
    }


    return (
        < div className="languageBar" >
            <div className="flag" onClick={languageRuToggle} >
                <img src={Russiaflag} alt="" />
            </div>
            <div className="vectorImg">
                <img src={vector} alt="" />
            </div>
            <div className="vypadashka">
                <div className="flag" onClick={languageUaToggle}>
                    <img src={Ukraineflag} alt="" />
                </div>
                <div className="flag" onClick={languageEngToggle}>
                    <img src={UK} alt="" />
                </div>
            </div>
        </div >
    );
}

export default HeaderLanguage;
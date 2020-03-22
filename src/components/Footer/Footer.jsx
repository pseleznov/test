import React from 'react'
import './Footer.css'
import facebook from '../../assets/images/facebook.jpg'
import instagram from '../../assets/images/instagram.jpg'
import youtube from '../../assets/images/youtube.jpg'
import google from '../../assets/images/googlePlus.jpg'

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footergrid">
                <div className="info">
                    <div className="infoWrapper">
                        <span className="title">О компании</span>
                        <span>Наши работы</span>
                        <span>Контакты</span>
                        <span>Доставка</span>
                        <span>Форма заказа</span>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceWrapper">
                        <div className="title">Услуги</div>
                        <div className="serviceBlock">
                            <div className="firstServiceBlock">
                                <div>Производство оборудования</div>
                                <div>Металлическая мебель</div>
                                <div>Металлоконструкции</div>
                                <div>Металлообработка</div>
                            </div>
                            <div className="secondServiceBlock">
                                <div>Раскрой металла</div>
                                <div>Конструкторское бюро</div>
                                <div>Аренда техники</div>
                                <div>Ремонт техники</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts">
                    <div className="contactsWrapper">
                        <span>Контактная информация</span>
                        <span>Заводская улица, 2В, Буча, Киевская область, 08292</span>
                        <span>ПН - ПТ: 09:00 - 18:00</span>
                        <span>+38(097)123-45-67</span>
                        <div className="links">
                            <a href="#"><img src={facebook} alt=""/></a>
                            <a href="#"><img src={instagram} alt=""/></a>
                            <a href="#"><img src={youtube} alt=""/></a>
                            <a href="#"><img src={google} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="directed_By_Robert_B_Weide">
                <div>Developed by Stubbs</div>
            </div>
        </div>
    );
}

export default Footer;
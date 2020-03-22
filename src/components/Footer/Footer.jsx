import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footergrid">
                <div className="info">
                    <div className="infoWrapper">
                        <span>О компании</span>
                        <span>Наши работы</span>
                        <span>Контакты</span>
                        <span>Доставка</span>
                        <span>Форма заказа</span>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceWrapper">
                        <div>Услуги</div>
                        <div className="serviceBlock">
                            <div className="firstServiceBlock">
                                <div>Lorem ipsum dolor sit amet.</div>
                                <div>Lorem ipsum dolor sit amet.</div>
                                <div>Lorem ipsum dolor sit amet.</div>
                                <div>Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div className="secondServiceBlock">
                                <div>Lorem ipsum dolor sit amet.</div>
                                <div>Lorem ipsum dolor sit amet.</div>
                                <div>Lorem ipsum dolor sit amet.</div>
                                <div>Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts">asdas</div>
            </div>
            <div className="directed_By_Robert_B_Weide"></div>
        </div>
    );
}

export default Footer;
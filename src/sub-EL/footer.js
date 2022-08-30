import React from "react";
import logo from "../img/logo_footer.png"
import i_phone from "../img/i-phone.png"
import i_mail from "../img/i-mail.png"
import i_map_pin from "../img/i-map-pin.png";
import social_icon from "./social";
import card_cash from "../img/card/cash.png"
import card_credit from "../img/card/credit-card.png"
import card_master from "../img/card/MasterCard_Logo.png"
import card_visa from "../img/card/visa-5-logo-png-transparent.png"

class Footer extends React.Component{
    render(){
        return(
            <footer class="footer p-4">
                <div className="d-flex flex-row footer-box">
                    <div class="footer-sub footer-sub-1">
                        <img src={logo} alt="" />
                        <p>Shop helmets, fullface hats, 3/4 hats, genuine motor protective gear that meet the standards of the General Department of Standards, Metrology and Quality.</p>

                    </div>
                    <div class="footer-sub footer-sub-2">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column">
                                <div>
                                    <img src={i_phone} alt="" />
                                    <span>Hotline</span>
                                </div>
                                <div>
                                    <img src={i_mail} alt="" />
                                    <span>Mail</span>
                                </div>
                                <div>
                                    <img src={i_map_pin} alt="" />
                                    <span>Address</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div>012345678</div>
                                <div>ec0102shop@gmail.com</div>
                                <div>227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam</div>
                            </div>
                        </div>

                        <p>Follow us on:</p>
                        {social_icon()}
                    </div>
                    <div class="footer-sub footer-sub-3">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6383804915426!2d106.68054061471831!3d10.76232799233106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1953a6e961%3A0xc77e334f1510b975!2zMjI3IE5ndXnhu4VuIFbEg24gQ-G7qw!5e0!3m2!1svi!2s!4v1657954845378!5m2!1svi!2s" 
                            width="240" 
                            height="180" 
                            style={{border:0}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div class="footer-sub footer-sub-4">
                        <div class="h6">
                        CUSTOMER SERVICES
                        </div>
                        <p>About us</p>
                        <p>Warranty Policy</p>
                        <p>Return Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div class="footer-sub footer-sub-5">
                        <div class="h6">PAYMENT METHOD</div>
                        <img src={card_visa} alt="" />
                        <img src={card_master} alt="" />
                        <img src={card_credit} alt="" />
                        <img src={card_cash} alt="" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import React from "react";
import store from "../img/store.jpg"

function Contact () {
    return (
        <div>
            <Header/>
            <Category/>
            <div className="contact">
                <div className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6383804915426!2d106.68054061471831!3d10.76232799233106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1953a6e961%3A0xc77e334f1510b975!2zMjI3IE5ndXnhu4VuIFbEg24gQ-G7qw!5e0!3m2!1svi!2s!4v1657954845378!5m2!1svi!2s" 
                        width="940" 
                        height="580" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div class="list-contact">
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column">
                            <img className="img-store" src={store}/>
                            <div>
                                <div>
                                    <i className="fa fa-phone"></i>
                                    <span>Hotline: 012345678</span>
                                </div>
                                <div>
                                    <i className="fa fa-envelope"></i>
                                    <span>Mail: ec0102shop@gmail.com</span>
                                </div>
                                <div>
                                    <i className="fa fa-location-arrow"></i>
                                    <span>Address: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Contact;
import React from "react";
import {Row,Container} from "react-bootstrap"
import logo from "../img/logo.png";
import cart_icon from "../img/cart.png"
import user_img from "../img/user.png"
import Dropdown from 'react-bootstrap/Dropdown';
import social_icon from "./social";
import {
    NavLink
} from 'react-router-dom';

function a_order(){
    if (JSON.parse(window.localStorage.getItem("list_products")) ===null)
    return 0;
    else return  JSON.parse(window.localStorage.getItem("list_products")).length;

}
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Header extends React.Component{
    render(){
        return(
            <div class="header p-4">
                <Container className="container-lg ">
                    <Row className="header-el">
                        {social_icon()}
                        <div className="navbar navigation">
                                    <Row><NavLink className="nav-link" to="/">Home</NavLink></Row>
                                    <Row><NavLink className="nav-link"to="/about">About</NavLink></Row>
                                    <Row><img className="nav-link" src={logo} alt="" /></Row>
                                    <Row><NavLink className="nav-link" to="/contact">Contact</NavLink></Row>
                        </div>
                        <div className="navbar cart-icon">
                            <div className="cart">
                                <NavLink to="/cart">
                                <img src={cart_icon} alt="" />
                                <span>{a_order()}</span>
                                </NavLink>
                            </div>
                            <div class = "user">
                                <Dropdown className="user_option">
                                    <Dropdown.Toggle className="i_user_option">
                                    <img src={user_img} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item id ="option" value ="login" href="/">
                                            <Row><NavLink className="nav-link" to="/login">Login</NavLink></Row>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;
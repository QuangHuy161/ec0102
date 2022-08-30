import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import React from "react";
import Member from "../sub-EL/member.js";
import Heading_title from "../sub-EL/head_title.js";

function About () {
    return (
        <div>
            <Header/>
            <Category/>
            {Heading_title("About Us")}
            <Member/>
            <Footer/>
        </div>
    );
}
export default About;
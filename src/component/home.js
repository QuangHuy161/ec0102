import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import React from "react";
import Brands from "../sub-EL/brands.js";
import List_product from "../sub-EL/list_product.js";

class Home extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Category/>
                <Brands/>
                <List_product/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
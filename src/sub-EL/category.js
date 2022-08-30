import React from "react";

class Category extends React.Component{
    render(){
        return (
            <ul class="nav category">
                <li class="nav-item">
                    <a class="nav-link" href="#">Replacement</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Decorate</a> 
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#">Other</a> 
                </li>
                
            </ul>
        );
        
    }
}

export default Category;
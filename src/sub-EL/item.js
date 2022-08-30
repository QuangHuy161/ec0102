import ReactStars from "react-rating-stars-component";
import React from "react";
import social_icon from "./social";
import AddToCartButton from "./Add_button";



function Sub_item(id,img,price,avai,info,title){
    return(
        <div>
            <div className="item_box d-flex" id={id}>
                <div className="item_box_left">
                    <img src={img} alt="" />
                </div>
                <div className="item_box_right">
                    <h4>{title}</h4>
                    <ReactStars 
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <h4 className="price">{price} VND</h4>
                    <p class="ava">Available:{avai}</p>
                    <input id="amount" type="number" min="1" max={avai}/>
                    {AddToCartButton(id,img,price,avai,info,title)}
                    <p>{info}</p>
                    <p className="socail">Follow us on</p>
                    {social_icon()}
                </div>
            </div>
        </div>
    )
}

export default Sub_item;
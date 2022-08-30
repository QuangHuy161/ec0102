import { NavLink } from "react-router-dom";
function List_order(){
    
    let list_products = JSON.parse(window.localStorage.getItem('list_products'));

    let items=``
    if(list_products !== null){
        for(let i=0; i< list_products.length;i++){
            let item=`<div className="item" style="display:flex;
            margin-bottom:20px;
            justify-content: space-between;
            border-bottom:1px solid gray;
            padding:10px 0;
            " 
            id=${list_products[i].id}>
                        <div className="img"  >
                            <img style =" width: 150px; height:auto;"src=${list_products[i].img} alt="" />
                        </div>
                        <div className="item_right" style =" width: 600px; " >
                            <h4 className="title">${list_products[i].title}</h4>
                            <p className="price"
                            style="
                                color:red;
                                font-size:30px;
                                font-weight:600;
                            "
                            >
                                ${list_products[i].price} VND
                            </p>
                            <p className="avai">Quantity:${list_products[i].amount}</p>
                        </div>
                        <div className="del"
                        style=
                        "
                            background: #f48148;
                            width: 50px;
                            text-align:center;
                            cursor:pointer;
                            line-height: 140px;
                            font-size: 30px;
                            color: white;
                            font-weight: 700;
                        "
                        
                        >
                            X
                        </div>
                    </div>`
            ;
            items+=item;
        }
    }
    
    return(
        <div className="container">
            <div className="main_list">
                <div className="list_order" dangerouslySetInnerHTML={{__html: items}} />
                <button>
                    <NavLink to="/pay" className='payButton'>
                        Add to cart
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default List_order;
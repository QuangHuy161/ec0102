import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import Sub_item from "../sub-EL/item.js";
import {useParams} from 'react-router-dom';



function Item (){
    const params =useParams();
        let item ={
            id:'',
            imgLink: '',
            price: 0,
            amount:100,
            info: '',
            title: ''
        }
        fetch("https://ec01-02-shop.herokuapp.com/api/v1/product/")
        .then((response) => response.json())
        .then(function(data){
            let items=data.data.products;
            for( let i=0;i<items.length;i++){
                let info=` 
                    Bao gồm: ${items[i].includes }  
                    Chất liệu :${items[i].material}  
                    Nguồn gốc: ${items[i].origin}   
                    Loại: ${items[i].type}   
                    Sử dụng: ${items[i].uses}`; 
                if(params.ID === items[i]._id){
                    item.id=params.ID;
                    item.imgLink= items[i].imgLink;
                    item.price= items[i].price;
                    item.info=  info;
                    item.title= items[i].name;
                    break;
                }
            }
            console.log(item)
            window.localStorage.setItem('curent',JSON.stringify(item));
        })
    let e= JSON.parse(window.localStorage.getItem('curent'))
    console.log(e)
    return (
        <div>
            <Header/>
            <Category/>
            {Sub_item(e.id,e.imgLink,e.price,e.amount,e.info,e.title)}
            <Footer/>
        </div>
    );
}
export default Item;
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React from 'react';

const MOMOURL = "http://localhost:5000/api/v1/payment/MOMO"
const VNPAYURL = "https://ec01-02-shop.herokuapp.com/api/v1/payment/VNPAY"
//const baseURL

function Pay_info(){
    let items='';
    let price= 0;
    if(JSON.parse(window.localStorage.getItem("list_products"))!== null){
        let list_products=JSON.parse(window.localStorage.getItem("list_products"));
        
        for(let i=0; i<list_products.length;i++){
            
            let item =`
                    <tr id = ${list_products[i].id}>
                        <td>${list_products[i].title}</td>
                        <td>${list_products[i].amount}</td>
                        <td>${list_products[i].price}</td>
                    </tr>
                `;
                price+= parseFloat(list_products[i].price)* list_products[i].amount;
            items+=item;
        }
        items+=`
                <tr>
                    <td>TOTAL PRICE</td>
                    <td></td>
                    <td>${price}</td>
                </tr>
            `

    }

    // function MOMO(e) {
    //     let name = document.getElementById('name').value;
    //     let phone = document.getElementById('phone').value;
    //     let email = document.getElementById('email').value;
    //     let province = document.getElementById('province').value;
    //     let district = document.getElementById('district').value;
    //     let ward = document.getElementById('ward').value;
    //     let address = document.getElementById('address').value;
    //     let note = document.getElementById('note').value;

    //     e.preventDefault();
    //     let order ={
    //         name: name,
    //         phone:phone,
    //         email:email,
    //         province:province,
    //         district:district,
    //         ward:ward,
    //         address:address,
    //         note: note,
    //         order: window.localStorage.getItem("list_products"),
    //         price:price
    //     }
        
        
    //     axios({
    //             method: "post",
    //             url: MOMOURL,
    //             amount:price,
    //             data: JSON.stringify(order),
    //         })
    //         .then(function (response) {
    //             //handle success
    //             console.log(response);
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
    //   }
    //   function VNPAY(e) {
    //     let name = document.getElementById('name').value;
    //     let phone = document.getElementById('phone').value;
    //     let email = document.getElementById('email').value;
    //     let province = document.getElementById('province').value;
    //     let district = document.getElementById('district').value;
    //     let ward = document.getElementById('ward').value;
    //     let address = document.getElementById('address').value;
    //     let note = document.getElementById('note').value;

    //     let order ={
    //         name: name,
    //         phone:phone,
    //         email:email,
    //         province:province,
    //         district:district,
    //         ward:ward,
    //         address:address,
    //         note: note,
    //         order: window.localStorage.getItem("list_products"),
    //         price:price
    //     }
        
    //     axios({
    //         method: "post",
    //         url: VNPAYURL,
    //         amount:price,
    //         //data: JSON.stringify(order),
    //         headers: { "Content-Type": "multipart/form-data" },
    //       })
    //         .then(function (response) {
    //           //handle success
    //           console.log(response);
    //         })
    //         .catch(function (response) {
    //           //handle error
    //           console.log(response);
    //         });
    //   }
    function MOMO(e) {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let province = document.getElementById('province').value;
        let district = document.getElementById('district').value;
        let ward = document.getElementById('ward').value;
        let address = document.getElementById('address').value;
        let note = document.getElementById('note').value;

        e.preventDefault();
        let order ={
            name: name,
            phone:phone,
            email:email,
            province:province,
            district:district,
            ward:ward,
            address:address,
            note: note,
            order: window.localStorage.getItem("list_products"),
            price:price
        }
        axios
          .post(MOMOURL, {
            price:price,
            data: JSON.stringify(order)
          }).then((res) => {
            console.log(res)
          })
      }
      function VNPAY() {
        axios
          .post(VNPAYURL, {
            amount: price
          }).then((res) => {
          })
      }

    return(
        <div className="payment_main container">
                
                <div className="input_list">
                    <form className="d-flex justify-content-between"
                        //onSubmit={}                    
                    >
                        <div className="left d-flex flex-column">
                            <h3>Shipping</h3>
                            <div>
                                <label>
                                    Fullname(*)
                                </label>
                                <input id ="name" type="text" name="name" placeholder="Enter fullname" required/>
                            </div>
                            <div>
                                <label>
                                    Phone Number(*)
                                </label>
                                <input id="phone" type="tel" name="phone" placeholder="Enter phone number" required/>
                            </div>
                            <div>
                                <label>
                                    Email
                                </label>
                                <input type="email" id="email" name="email" placeholder="Enter your email"/>
                            </div>
                            <div>
                                <label>
                                    Province(*)
                                </label>
                                <input id="province" type="text" name="province" placeholder="Enter Province" required/>
                            </div>
                            <div>
                                <label>
                                    District(*)
                                </label>
                                <input id="district" type="text" name="district" placeholder="Enter District" required/>
                            </div>
                            <div>
                                <label>
                                    Ward
                                </label>
                                <input id="ward" type="text" name="ward" placeholder="Enter Ward" />
                            </div>
                            <div>
                                <label>
                                    Address(*)
                                </label>
                                <input id="address" type="text" name="address" placeholder="Enter Address" required/>
                            </div>
                            <div>
                                <label>
                                    Note
                                </label>
                                <textarea id="note" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="right">
                            <h3>Order</h3>
                            <Table striped>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="" dangerouslySetInnerHTML={{__html: items}} />
                            </Table>
                            <button  onClick={MOMO}>MOMO</button>
                            <button  onClick={VNPAY}>VNPAY</button>
                        </div>

                    </form>
            </div>
            
        </div>
    )

}
export default Pay_info;
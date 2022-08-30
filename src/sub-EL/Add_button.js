function AddToCartButton(id,img,price,avai,info,title){
    // This syntax ensures `this` is bound within handleClick.
    const Add = () => {
        let order={
            id :id,
            img: img,
            price: price,
            available:avai,
            info:info,
            title:title,
            amount:1
        }
        if(document.getElementById('amount').value=='')
        order.amount= 1 ;
        else order.amount = Number(document.getElementById('amount').value);
        if (JSON.parse(window.localStorage.getItem("list_products")) === null) {
            let list = [];
            list.push(order);
            window.localStorage.setItem('list_products',JSON.stringify(list));
        }
        else{
            let list = JSON.parse(window.localStorage.getItem("list_products"));
            for(let i=0; i< list.length;i++){
                if(order.id == list[i].id){
                    break;
                }
                if(i == list.length -1){
                    list.push(order);
                    window.localStorage.setItem('list_products',JSON.stringify(list));
                }
            }
        }
    };
    
    return (
        <div>
            <button onClick={Add}>
                Add to cart
            </button>
        </div>
    );
}

export default AddToCartButton;
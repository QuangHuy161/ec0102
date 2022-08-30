import Heading_title from "./head_title";
function List_product(){
    let items=''
    //let E=[]
    fetch("https://ec01-02-shop.herokuapp.com/api/v1/product/")
    .then((response) => response.json())
    .then(function(data){
      let Products=data.data.products;
        for(let i=0; i< Products.length;i++){
            let item = `
                    <li class="item" id=${Products[i]._id}>
                        <a href="/item/${Products[i]._id}">
                            <img src=${Products[i].imgLink} alt="img" />
                            <h5 class="item_title">${Products[i].name}</h5>
                            <h4 class="item_price">${Products[i].price}</h4>
                            <p class="item_status">Available</p>
                        </a>
                    </li>
            `
            items+=item;
        }
        document.querySelector('.list_product>.products').insertAdjacentHTML('beforeEnd', items)
    })

    return(
        <div>
            {Heading_title('PRODUCTS')}
            <div className="list_product_box">
                <div className="list_product_box_top d-flex justify-content-between">
                    <div class="list_product_box_top-left">Jet</div>
                    <div class="list_product_box_top-right">Sort</div>
                </div>
                <div class="list_product_box_popular">
                    <ul class="nav ">
                        <li class="nav-item">
                            <a class="nav-link" href="">HOT</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">ROYAL</a> 
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="">AVEX</a> 
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="">ROC</a> 
                        </li>
                        
                    </ul>
                </div>
                <div class="list_product">
                    <ul class="products d-grid gap-3 justify-content-center" >
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List_product;
import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import List_order from "../sub-EL/list_order.js";

function Cart () {
    return (
        <div>
            <Header/>
            <Category/>
            <List_order/>
            <Footer/>
        </div>
    );
}
export default Cart;
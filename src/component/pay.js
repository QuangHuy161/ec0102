import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import Heading_title from "../sub-EL/head_title.js";
import Pay_info from "../sub-EL/pay_info.js";
function Pay () {
    return (
        <div>
            <Header/>
            <Category/>
            {Heading_title("PAY & SHIP")}
            <Pay_info/>
            <Footer/>
        </div>
    );
}
export default Pay;
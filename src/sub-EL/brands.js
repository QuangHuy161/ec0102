import Heading_title from "./head_title";
import brands_image from "../img/brands image.png"
function Brands(){

    return(
        <div>
            {Heading_title('BRANDS')}
            <img className="brands" src={brands_image} alt="" />
            <p></p>
        </div>
    )
}

export default Brands;
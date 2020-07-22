import React from "react";
import 'css/index.css';
import 'css/reset.css';
const Product = ({ title, price, imgPath, rate }) => {


    const sayHello = (event) => {
        alert(`${title}: this product has been added to your cart.`)
    }
    return (
        <>
            

                <ul>
                    <img src={imgPath}alt="product" class="product-img" />
                    <li><a href="">{title}</a></li>
                    <li><p>CAD$ {price}</p></li>
                    <li><a href=""><img src={rate} alt="rating" class="rating" /></a></li>
                </ul>
                
           


        </>
    )
}

export default Product;

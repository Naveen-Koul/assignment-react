import React from 'react';
import Product from "components/Product";
import 'css/index.css';
import 'css/reset.css';
const ProductList = ({data}) => {
    const productsArr = data.map(list => <Product key={list.id} title={list.title} price={list.price} imgPath={list.imgPath} rate={list.rate}  />)
    return (
        <>
           <section class="product-section main-row">
    <ul class="category-list">
        <li><h5>Electronics</h5></li>
        <li><a href="">Audio & Home Theatre</a></li>
        <li><a href="">Camera,photo & video</a></li>
        <li><a href="">GPS & Navigation</a></li>
        <li><a href="">Office Electronics</a></li>
        <li><a href="">Computers & Accessories</a></li>
        <li><a href="">eBook Reader & Accessories</a></li>
        <li><a href="">Headphones</a></li>
    </ul>
    <ul class="product-grid">{productsArr}</ul>
        
        
        
</section> 
        </>
    )
}
export default ProductList;
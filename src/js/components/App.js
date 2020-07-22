import React from "react";
import ReactDOM from "react-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import ProductList from "components/ProductList";

import 'css/index.css';
import 'css/reset.css';

const App = () => {
    const productsArr=[{title : "Canon PowerShot G7 X Mark III Digital Camera ",
    price : "1119",
    imgPath : "/src/img/camera.png",
    rate: "/src/img/4rating.jpg"},
{ title : "Submariner Automatic-self-Wind Male Watch",
price : "12632",
imgPath : "/src/img/Watch.png",
rate: "/src/img/4.5rating.png"},
{title : "Seagate Portable 2TB External Hard Drive ",
price : "85",
imgPath : "/src/img/seagate.jpg",
rate: "/src/img/4rating.jpg"},
{title : "BLACK+DECKER Lightweight Steam Iron",
price : "21",
imgPath : "/src/img/press.jpg",
rate: "/src/img/4rating.jpg"},
{ title : "Philips 2200 Series Fully Automatic Espresso Machine",
price : "899",
imgPath : "/src/img/coffee.jpg",
rate: "/src/img/4.5rating.png"},
{
    title : "Sony Electronics SRS-XB12 Extra Bass Portable Bluetooth Speaker",
    price : "78",
    imgPath : "/src/img/sony.jpg",
    rate: "/src/img/4rating.jpg"}]
	return(
        <>
            <Header />
            <ProductList data = {productsArr} />
            <Footer />
            {/* <Greeting name="World" /> */}
        </>
        )
}

export default App;


import React from "react";
import LogoImage from "img/amazonlogo.png";
// import test from "img/amazonlogo.png";

const Header = () => {
    return (
        <>
            <header>
                <div class="main-banner">
                    <a href="/"><img src={LogoImage} alt="logo" class="main-logo" /></a>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#Account">Account</a></li>
                            <li><a href="#Orders">Orders</a></li>
                            <li><a href="#Prime">Prime</a></li>
                            <li><a href="#Cart">Cart</a></li>
                        </ul>
                        <div class="main-button">
                            <a href="/login"><button type="button" class="log-bttn main-bttn">Log In</button></a>
                            <a href="/registration"><button type="button" class="sign-up-bttn main-bttn">Sign Up</button></a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )   
}

export default Header;



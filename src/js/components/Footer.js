import React from "react";
import LogoImage from "img/amazonlogo.png";
import Facebook from "img/facebook.svg";
import Whatsapp from "img/whatsapp.svg";
import Instagram from "img/instagram.svg";

const Footer = () => {
	return  (
			<>
			<footer>
            <section class="main-row">
                <nav class="main-footer">
                    <ul class = "footer-list">  
                        <li><h2>Get To Know Us</h2></li>
                        <li><a href ="#">Careers</a></li>
                        <li><a href ="#">Amazon and Our Planet</a></li> 
                        <li><a href ="#">Investor Relations</a></li><li><a href ="#">Press Releases</a></li>    
                    </ul>
                    <ul>
                        <li><h2>Make Money</h2></li>
                        <li><a href ="#">Sell on Amazon</a></li>
                        <li><a href ="#">Amazon Associates</a></li> 
                        <li><a href ="#">Advertise Your Products</a></li>   
                        <li><a href ="#">Sell on Amazon Handmade</a></li>       
                    </ul>
                    <ul>
                        <li><h2>Amazon Payment Products</h2></li>
                        <li><a href ="#">Shop with Points</a></li><li><a href ="#">Amazon Associates</a></li>   
                        <li><a href ="#">Advertise Your Products</a></li>           
                    </ul>
                    <ul>
                        <li><h2>Let Us Help You</h2></li>
                        <li><a href ="#">Shipping rates</a></li>
                        <li><a href ="#">Returns</a></li>                   
                        <li><a href ="#">Amazon Prime</a></li>
                        <li><a href ="#">Cutomer service</a></li>
                    </ul>
                </nav>
            </section>
            <section class="footer-logo">
                <a href="/"><img src={LogoImage} alt="logo" class="main-logo"/></a>
            </section>
            <section class="main-row">
                <nav class="footer-nav">
                    <ul class="footer-links">
                        <li><a href="#">Privacy Policy</a> </li>
                        <li><a href="#">Cookies Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                    <ul class="footer-social">
                        <li><a href="#" ><img src={Facebook} alt="facebook" /></a></li>
                        <li><a href="#"><img src={Whatsapp}  alt="whatsapp" /></a></li>
                        <li><a href="#"><img src={Instagram} alt="instagram" /></a></li>    
                    </ul>
                </nav>
                <p class="copy">&copy;2008 - 2020 Amazon.com  All rights are reserved.</p>
            </section>
            </footer>
            </>
		)
}

export default Footer;
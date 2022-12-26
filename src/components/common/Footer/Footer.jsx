import React,{useState,useEffect,useContext} from "react";
import './Footer.css';


const Footer = (props)=>{



    return (
        <footer id="footer-outer-container">
            <div id="inner-container">
                <div id="title-container">
                    <h6>Covid Tracker &#169;2022</h6>
                </div>

                <div id="more-links-container">
                    <a href="#" className="more-link">API Documentation</a>
                    <span></span>
                    <a href="#" className="more-link">More About Pandemic</a>
                    <a href="#" className="more-link">Ways to keep safe</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
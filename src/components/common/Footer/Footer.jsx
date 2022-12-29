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
                    <a href="https://coronavirus.data.gov.uk/details/developers-guide/main-api" target="_blank" className="more-link">API Documentation</a>
                    <a href="https://www.worldometers.info/coronavirus/" target="_blank" className="more-link">More About Pandemic</a>
                    <a href="https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html" target="_blank" className="more-link">Ways to keep safe</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
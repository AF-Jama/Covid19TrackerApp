import React,{useState,useContext} from "react";
import NavBar from "../NavBar";
import './Header.css';


const Header = (props)=>{


    return (
        <header id="header-outer-container">
            <div id="inner-header-container">
                <div id="title-container">
                    <h3>Covid Tracker</h3>
                </div>
                <NavBar/>
            </div>

        </header>        
    )
}


export default Header;
import React,{useState,useEffect,useContext,useRef, createRef} from "react";
import ActionButton from "../ActionButtons";
import './NavBar.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBar = (props)=>{
    const [visible,setVisible] = useState(true) // set visibility state 

    const burgerButtonRef = useRef();
    const outerNavigationLinkContainerRef = useRef();

    const onClick = (event)=>{
        event.preventDefault();

        if(visible){
            // triggered if visible state is true
            outerNavigationLinkContainerRef.current.style.maxHeight='0px'; /* onClick maxHeight over nav link containe changed to maxHeight:0 (meaning container has no height) */
            // outerNavigationLinkContainerRef.current.style.overflow='hidden'; /* Overflow content is hidden */
            setVisible(!visible) // sets visibility to false (!opposite of true)
            return;
        }
        outerNavigationLinkContainerRef.current.style.maxHeight="500px";
        setVisible(!visible)
    }


    return (
        <nav id="outer-navigation-container">
            <div id="nav-links-outer-container" style={{border:"2px solid white"}} ref={outerNavigationLinkContainerRef}>
                <a href="/" className="nav-link">Home</a>
                {/* <a href="#" className="nav-link">About</a> */}
                <a href="/main" className="nav-link">Main</a>
                <ActionButton id="action-button" text="API Source" style={{borderRadius:"5%",padding:"0.5rem 2rem",backgroundColor:"lightblue",fontSize:"1.2rem"}}/>
            </div>

            <div id="burger-btn" style={{border:"2px solid red"}} onClick={onClick}>
                <FontAwesomeIcon icon={faBars} width="60px" height="60px" color="black"/>
            </div>
        </nav>
    )
}


export default NavBar;
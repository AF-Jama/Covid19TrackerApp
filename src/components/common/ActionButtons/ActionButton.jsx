import React from "react";
import './ActionButton.css';


const ActionButton = (props)=>{
    // ActionButton takes in style and text props which can be reused throughout

    return (
        <a href="https://coronavirus.data.gov.uk/details/developers-guide/main-api" target="_blank"><button id="action-button" style={props.style}>{props.text}</button></a>
    )
}


export default ActionButton;
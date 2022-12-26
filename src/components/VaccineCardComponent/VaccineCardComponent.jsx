import React,{useState,useEffect,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faSyringe } from '@fortawesome/free-solid-svg-icons';
import './VaccineCardComponent.css';

// static component that takes data prop
const VaccineCardComponent = (props)=>{
    return (
        <div id="vaccine-card" className='card border-secondary text-secondary'>
            <div id="information-container">
                <h4 style={{marginTop:"1rem"}}>{props.n}</h4>
                <button id="dose-number-button-container" style={{padding:"0.5rem 1.5rem",marginTop:"1rem"}}>{props.data}</button>
            </div>

            <div id="vaccine-logo-container" >
                <FontAwesomeIcon icon={faSyringe} width="150px" height="150px"/>
            </div>


        </div>
    )
}



export default VaccineCardComponent;
import React,{useState,useEffect,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faSyringe } from '@fortawesome/free-solid-svg-icons';
import syringe from '../../assets/syringe.svg';
import './VaccineCardComponent.css';

// static component that takes data prop
const VaccineCardComponent = (props)=>{
    return (
        <div id="vaccine-card" className='card border-secondary text-secondary'>
            <h4 style={{marginTop:"1rem"}}>{props.n}</h4>
            
            <div id="information-container">
                <button id="dose-number-button-container" style={{padding:"0.5rem 1.5rem",marginTop:"1rem"}}>{props.data}</button>
            </div>

            <img id='syringe-img' src={syringe} alt="" />


        </div>
    )
}



export default VaccineCardComponent;
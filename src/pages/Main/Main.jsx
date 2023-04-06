import React,{useState,useEffect,useContext,useRef} from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import UKDeathComponent from "../../components/UKDeathDataComponent";
import VaccinationDataComponent from "../../components/VaccinationDataComponent";
import VaccineUptakeComponent from "../../components/VaccineUptakeComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import './Main.css';
import { render } from "@testing-library/react";


const Main = (props)=>{
    const [caretStatus,setCaretStatus] = useState(false); // sets caret state which keep tracks of caret icon which is rendered, initially state is set to false
    const [sideBarLinkId,setSideBarLinkId] = useState(0); // sets side bar link state, initially set to 0
    

    const caretRef = useRef();
    const sideBarContainerRef = useRef();

    const onCaretClick = (event)=>{
        event.preventDefault();

        if(caretStatus){
            // triggered if caretStatus evaluates to truly bool
            setCaretStatus(!caretStatus);
            sideBarContainerRef.current.style.maxHeight="0";
            return;  
        }
        setCaretStatus(!caretStatus);
        sideBarContainerRef.current.style.maxHeight="500px";
        return;

    }

    const onGetCountryDataClick = (event)=>{
        event.preventDefault();

        setSideBarLinkId(0);
    }

    const onVaccineDataClick = (event)=>{
        event.preventDefault();

        setSideBarLinkId(1);
    }

    const onVaccineUptakeClick = (event)=>{
        event.preventDefault();

        setSideBarLinkId(2);
    }

    const renderSwitch = (linkId)=>{
        // trigger switch case to return component based on the current sideBarLinkId state 
        switch(linkId){
            case 0:
                return <UKDeathComponent/> // death chart component

            case 1:
                return <VaccinationDataComponent/>

            case 2:
                return <VaccineUptakeComponent/>; // User Customised request
        }
    }

    return (
        <div id="main-outer-container">
            <Header/>

            <main id="main-content-outer-container">
                <div id="inner-content-container">
                    <div id="button-container" ref={caretRef}>
                        {caretStatus?<FontAwesomeIcon icon={faCaretUp} width="40px" height="40px" onClick={onCaretClick}/>:<FontAwesomeIcon icon={faCaretDown} width="40px" height="40px" onClick={onCaretClick}/>}
                    </div>

                    <div id="side-bar-container" ref={sideBarContainerRef}>
                        <a href="#" className="side-bar-links" onClick={onGetCountryDataClick}>Get Country Deaths</a>
                        <a href="#" className="side-bar-links" onClick={onVaccineDataClick}>Vaccine Uptake Graphs</a>
                        <a href="#" className="side-bar-links" onClick={onVaccineUptakeClick}>Vaccine Uptake Graphs</a>
                    </div>

                    <div id="dynamic-content-container">
                        {renderSwitch(sideBarLinkId)}
                    </div>
                </div>
            </main>

            {/* <Footer/> */}
        </div>
    )
}


export default Main;
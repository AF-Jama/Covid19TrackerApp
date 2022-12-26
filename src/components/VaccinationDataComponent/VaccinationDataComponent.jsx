import React,{useState,useEffect,useContext} from "react";
import './VaccinationDataComponent.css';
import VaccineCardComponent from "../VaccineCardComponent";
import useFetch from "../../customHooks/useFetch";
import { ResponsiveContainer } from "recharts";


const VaccinationDataComponent = (props)=>{
    const {data,loading,error} = useFetch(`${process.env.REACT_APP_BASE_URL}?filters=areaType=Nation&structure={"date":"date","cumFirstDose":"cumPeopleVaccinatedFirstDoseByPublishDate","cumSecondDose":"cumPeopleVaccinatedSecondDoseByPublishDate","cumThirdDose":"cumPeopleVaccinatedThirdDoseByPublishDate","completedAllDose":"cumPeopleVaccinatedCompleteByPublishDate","cumThirdDose":"cumPeopleVaccinatedThirdInjectionByPublishDate"}`);


    // const thirdDoseData = ()=>{
    //     let i = 0; 
    //     while(!data.data[i]?.cumThirdDose){
    //         // triggered while cum third dose is null
    //         i++;
    //     }

    //     return data.data[i]?.cumThirdDose; // returns cum third dose 
    // }


    if(loading||error){
        // triggered if loading or error state evaluates to true 
        return (
            <h3 id="loading-title">Loading...</h3>
        )
    }

    if(data){
        return (
            <div id="vaccination-outer-container">
                <VaccineCardComponent data={data.data[0]?.cumFirstDose.toLocaleString()} n="First dose total"/>
                <VaccineCardComponent data={data.data[0]?.cumSecondDose.toLocaleString()} n="Second dose total"/>
                <VaccineCardComponent data={data.data[0]?.cumThirdDose.toLocaleString()} n="Third Dose Total"/>
            </div>
        )
    }

}



export default VaccinationDataComponent;
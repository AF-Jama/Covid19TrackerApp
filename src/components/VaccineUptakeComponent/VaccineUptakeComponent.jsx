import React,{useState,useEffect,useContext} from 'react';
import { json } from 'react-router';
import { ResponsiveContainer,LineChart, XAxis, YAxis, Line,Tooltip,Legend } from 'recharts';
import useFetch from '../../customHooks/useFetch';
import './VaccineUptakeComponent.css';



const VaccineUptakeComponent = (props)=>{
    let {data,loading,error} = useFetch(`${process.env.REACT_APP_BASE_URL}?filters=areaType=Nation&structure={"date":"date","cumFirstDose":"cumPeopleVaccinatedFirstDoseByPublishDate","cumSecondDose":"cumPeopleVaccinatedSecondDoseByPublishDate","cumThirdDose":"cumPeopleVaccinatedThirdDoseByPublishDate","cumThirdDose":"cumPeopleVaccinatedThirdInjectionByPublishDate"}`);


    if(loading||error){
        // triggered if loading or error evaulate to true
        return <h3 id='loading-title'>Loading....</h3>
    }

    if(data){
        // let m = [{
        //     cumFirstDose: 45244712,
        //     cumSecondDose: 42657115,
        //     cumThirdDose: 33537891,
        //     date: "2022-09-09"
   
        // },{
        //     cumFirstDose: 46244712,
        //     cumSecondDose: 43657115,
        //     cumThirdDose: 36537891,
        //     date: "2022-09-10"
        // },{
        //     cumFirstDose: 47244712,
        //     cumSecondDose: 44657115,
        //     cumThirdDose: 37537891,
        //     date: "2022-09-11"
        // }]
        // console.log(m);

        let arrayDeepCopy = JSON.parse(JSON.stringify(data.data)); // creating deep copy of data array   

        arrayDeepCopy = arrayDeepCopy.reverse(); // reversing data deep copy to ensure data dates are chroniligical

        // let response = data.data.reverse(); // reverses arrray

        return (
            <div id="vaccination-uptake-container">
                <ResponsiveContainer width="100%" minHeight={400}>
                    <LineChart data={arrayDeepCopy}    
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="date"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="linear" dataKey="cumFirstDose" stroke="black" color="black" width={3} />
                        <Line type="linear" dataKey="cumSecondDose" stroke="blue" color="black" width={3} />
                        <Line type="linear" dataKey="cumThirdDose" stroke="green" color="black" width={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )

    }


}


export default VaccineUptakeComponent;
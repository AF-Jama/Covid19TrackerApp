import React,{useState,useEffect,useContext} from "react";
import { ResponsiveContainer,LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line } from "recharts";
import './UKDeathDataComponent.css';
import useFetch from "../../customHooks/useFetch";


const UKDeathComponent = ({props})=>{
    let {data,loading,error} = useFetch(`${process.env.REACT_APP_BASE_URL}?filters=areaType=Nation&structure={"date":"date","death":"cumDeaths28DaysByDeathDate"}`)

    if(loading||error){
        return <h3 id="loading-title">Loading...</h3>
    }

    if(data){
        // data = data.data.reverse();
        let dataDeepCopy = JSON.parse(JSON.stringify(data.data)) // creating deep copy of data array

        dataDeepCopy = dataDeepCopy.reverse();

        console.log(data);
        return (
            <div id="death-data-container">
                <ResponsiveContainer width="100%" minHeight={400}>
                    <LineChart data={dataDeepCopy}    
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="linear" dataKey="death" stroke="black" color="black" width={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }

}


export default UKDeathComponent;
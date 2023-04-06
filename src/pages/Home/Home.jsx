import React,{useState,useEffect,useContext} from "react";
import './Home.css';
import Header from "../../components/common/Header";
import ActionButton from "../../components/common/ActionButtons";
import Footer from "../../components/common/Footer";
import { ResponsiveContainer,AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,ReferenceLine,Area,BarChart,Legend,Bar } from "recharts";
import useFetch from "../../customHooks/useFetch";



const Home = (props)=>{
    const {data,loading,error} = useFetch(`${process.env.REACT_APP_BASE_URL}`) // use fetch hook which runs initial render (on mount) and chanegs in the dependency array [URL]

    console.log(data?.data?.deaths);
    console.log(loading);
    console.log(error);

    const globalTotalDeaths = data?.data[0]?.death;
    const globalTotalConfirmedCases = data?.data[0]?.confirmed;

    let barChartData = [
        // {
        //     name:"UK Total Deaths ",
        //     data:globalTotalDeaths
        // },
        {
            name:"UK Confirmed Cases",
            data:globalTotalConfirmedCases
        }
];
    // const ldata = [
    //     {name: 'Global Deaths', data: globalTotalDeaths},
    //     {name: 'New Global Cases', data: globalNewConfirmedCases},
    // ];
    return (
        <div id="home-outer-container">
            <Header/>

            <main id="main-outer--wrapper-container-hero">
                <div id="inner-container" style={{display:"flex",border:"3px solid transparent",flexDirection:"column",width:"100%",alignItems:"center"}}>
                    <div id="global-stats-container">
                        <h2>{data?data?.data[0]?.death.toLocaleString():"Loading..."}</h2>
                        <h3>Uk Total deaths</h3>
                    </div>
{/* 
                    <div id="graph-container">
                    </div> */}

                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={barChartData}>
                            <Bar dataKey="data" fill="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>

                </div>

                <div id="action-button-container">
                    <ActionButton text="Explore More" style = {{display:"inline-block",padding:"1rem 2.5rem",borderRadius:"5%",marginTop:"1rem", backgroundColor:"#008CBA",fontSize:"1.2rem"}}/>
                </div>
            </main>

            {/* <Footer/> */}
        </div>
    )
}


export default Home;
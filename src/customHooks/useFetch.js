import React,{useState,useEffect} from "react";


const useFetch = (URL)=>{
    const [data,setData] = useState(null); // data initial state 
    const [loading,setLoading] = useState(true); // loading initial state 
    const [error,setError] = useState(false); // error initial state

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let response = await fetch(URL,{
                    method:"GET",
                    })

                if(!response.ok) throw new Error("Error triggered");

                response = await response.json();

                setData(response); // data state set to response
                setLoading(false); // loading state set to false
                setError(false);
            }catch(error){
                setData(null);
                setLoading(true);
                setError(error) // error state set to error thrown
            }
        }
        fetchData();
    },[URL]) // useEffect runs on initial render (on mount) and on dependency array change

    return {data,loading,error}; // returns state
}

export default useFetch;
import React, {useState,useEffect } from "react";
import moment from "moment";
import 'moment-duration-format';


const TimeLapsed = ({times}) => {
    const [timeStamp,setTimeStamp] = useState("");
    
    const getTime = () =>{
        const currentDate = new Date();
        const startDate = new Date(times.startDate);
        const timeLapsed = currentDate - startDate;
        

        setTimeStamp(moment.duration(timeLapsed).format('hh:mm:ss'));
    };
    
    useEffect(()=>{
        getTime();
        const interval = setInterval(() => {
            getTime();
        }, 1000);
        return () => clearInterval(interval);
    },[times]);

    return ( 
        <label className="text-xl"> {timeStamp} </label>
     );
}
 
export default TimeLapsed;
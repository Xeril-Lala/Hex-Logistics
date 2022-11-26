import React, {useState,useEffect } from "react";

const TimeLapsed = ({times}) => {
    const [timeStamp,setTimeStamp] = useState("");
    
    const getTime = () =>{
        const currentDate = new Date();
        const startDate = new Date(times.startDate);
        const timeLapsed = currentDate - startDate;

        setTimeStamp(msToTime(timeLapsed));
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

function msToTime(s) {
    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    let timeSpan;

    if (hrs===0 && mins===0){
        timeSpan = pad(mins) + ':' + pad(secs);
    }
    else{
        timeSpan = pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
    }
    
  
    return timeSpan;
}
 
export default TimeLapsed;
import React, { useState,useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';


const Percentage = ({times}) => {
    const [percentage,setPercentage] = useState(0);
    const [loadedChartData, setLoadedChartData] = useState({ datasets: [],});

    const options = {
        responsive: true,
        events: [],
        cutout : '80%',
        plugins: {
            legend: {
                display: false
            }
        }
      };

    const getPercentage = () =>{
        const currentDate = new Date();
        const startDate = new Date(times.startDate);
        const endDate = new Date(times.endDate);

        const totalTime = endDate - startDate;
        const timeLeft = endDate - currentDate;
 
        setPercentage(parseInt((totalTime - timeLeft) / totalTime * 100));
    };
    
    useEffect(()=>{
        getPercentage();
        const interval = setInterval(() => {
            getPercentage();
        }, 1000);
        return () => clearInterval(interval);
    },[times]);

    useEffect(()=>{
        setLoadedChartData({ 
            labels: ["Goal"],
            datasets : [
                {
                    label: "First",
                    backgroundColor: ["#15b7a6", "#e0e0e0"],
                    data:[percentage, 100-(percentage >100 ? 100 : percentage)]
                }
            ]        
        });
    },[percentage])
    
    return ( 
        <div className="relative mx-auto w-9/12 2xl:w-44 p-[16px] pt-10">
            <Doughnut data={loadedChartData} options={options} />
            <p className="percentageChart text-lg 2xl:text-[27px] pt-5">{percentage>100 ? '100' : percentage}%</p>
        </div>
     );
}
 
export default Percentage;
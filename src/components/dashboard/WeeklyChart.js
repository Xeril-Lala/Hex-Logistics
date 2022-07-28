import React, {useState, useEffect} from "react";
import {Bar} from 'react-chartjs-2';

const WeeklyChart = ({week,weeklyData}) => {
    const [isLoading, setIsLoading] = useState(true);
    //Bar chart states
    const [barChartData, setBarChartData] = useState({
        datasets: [],
    });
    const weekDay = weeklyData?.map(data=>data.weekDay);
    const loadedData = weeklyData?.map(data=>data.loaded);
    const unloadedData = weeklyData?.map(data=>data.unloaded);
    let allValues = [];
    if (unloadedData !== undefined || loadedData !== undefined){
         allValues = loadedData?.concat(unloadedData);
    }
    const maxValue = Math.max(...allValues) === null ? 0 : Math.max(...allValues);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: maxValue+(100-maxValue%100),
                ticks:{
                    display: true,
                    autoSkip: true,
                    maxTicksLimit: 10
                }
            },
        },
        plugins: {
            legend:{
                position: "top"
            },
            title: {
                display: true,
                text: "Weekly loaded statistics",
                color : '#000000',
                font:{
                    size: 14,
                    family: 'sans-serif',
                    weight: 'normal'                        
                }
            }
        }
    }

    //bar chart setup
    useEffect(() => {
        setIsLoading(true);
        setBarChartData({ 
            labels: weekDay,
            datasets : [
                {
                    label: "Loaded",
                    backgroundColor: "#ef5350",
                    data:loadedData
                },
                {
                    label: "Unloaded",
                    backgroundColor: "#42a5f5",
                    data: unloadedData
                }
            ]
        });
        setIsLoading(false);
    }, []);

    if(isLoading){
        return <div>LOADING</div>
    }

    return ( 
        <div className="card mt-12 chart xl:mx-40  px-48">
            <p>{week}</p>
            <Bar data={barChartData} options={options} />
        </div>   
    );
}
 
export default WeeklyChart;
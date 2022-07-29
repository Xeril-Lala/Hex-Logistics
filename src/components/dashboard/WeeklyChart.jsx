import React, {useState, useEffect} from "react";
import {Bar} from 'react-chartjs-2';

const WeeklyChart = ({week,weeklyData}) => {
    //Bar chart states
    const [barChartData, setBarChartData] = useState({
        datasets: [],
    });
    const weekDay = weeklyData.map(data=>data.weekDay);
    const loadedData = weeklyData.map(data=>data.loaded);
    const unloadedData = weeklyData.map(data=>data.unloaded);
    let allValues = loadedData.concat(unloadedData);
    
    const maxValue = Math.max(...allValues);

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
    }, []);

    return ( 
        <div className="card mt-12 chart xl:mx-40  px-48">
            <p>{week}</p>
            <Bar data={barChartData} options={options} />
        </div>   
    );
}
 
export default WeeklyChart;
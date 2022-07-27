import React, {useState, useEffect} from "react";
import {Bar} from 'react-chartjs-2';

const WeeklyChart = () => {
    
    //Bar chart states
    const [barChartData, setBarChartData] = useState({
        datasets: [],
    });
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 100
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
            labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            datasets : [
                {
                    label: "Loaded",
                    backgroundColor: "#ef5350",
                    data:[48,56,61,44,49,58,52]
                },
                {
                    label: "Unloaded",
                    backgroundColor: "#42a5f5",
                    data: [60,63,69,74,67,62,61]
                }
            ]
        });
    }, []);
    return ( 
        <div className="card mt-12 chart xl:mx-40  px-48">
            <Bar data={barChartData} options={options} />
        </div>   
    );
}
 
export default WeeklyChart;
import React, {useState, useEffect} from "react";
import {Bar} from 'react-chartjs-2';

const WeeklyChart = () => {
    
    //Bar chart states
    const [barChartData, setBarChartData] = useState({
        datasets: [],
    });
    const [barChartOptions, setBarChartOptions] = useState({});

    //bar chart setup
    useEffect(() => {
        setBarChartData({ 
            labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            datasets : [
                {
                    label: "Loaded",
                    backgroundColor: "#ef5350",
                    data:[3,2,3,2,1,2,3]
                },
                {
                    label: "Unloaded",
                    backgroundColor: "#42a5f5",
                    data: [4,3,5,10,19,3,4]
                }
            ]
        });
        setBarChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 20
                },
            },
            plugins: {
                legend:{
                    position: "top"
                },
                title: {
                    display: true,
                    text: "This week"
                }
            }
        })
    }, []);
    return ( 
        <div className="chart rounded shadow-lg xl:mx-40  px-48 py-10">
            <Bar data={barChartData} options={barChartOptions} />
        </div>   
    );
}
 
export default WeeklyChart;
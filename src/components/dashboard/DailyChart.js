import React, {useState, useEffect} from "react";
import {Bar} from 'react-chartjs-2';

const DailyChart = () => {
        //Bar chart states
        const [barChartData, setBarChartData] = useState({
            datasets: [],
        })

        const options = {
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
                    text: "Daily loaded statistics",
                    color : '#000000',
                    font:{
                        size: 14,
                        family: 'sans-serif',
                        weight: 'normal'                        }
                }
            }
        }
        
        //bar chart setup
        useEffect(() => {
            setBarChartData({ 
                labels: ["04:00","07:00","10:00","13:00","16:00","20:00","23:00"],
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

        }, []);

    return ( 
        <div className="card chart xl:mx-40 px-48 py-10">
            <Bar data={barChartData} options={options} />
        </div>
     );
}
 
export default DailyChart;
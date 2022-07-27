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
                    max: 12
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
                labels: ["00:00-02:00","02:00-04:00","04:00-06:00","06:00-08:00","08:00-10:00","10:00-12:00","12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00","22:00-24:00",],
                datasets : [
                    {
                        label: "Loaded",
                        backgroundColor: "#ef5350",
                        data:[3,2,3,2,1,2,3,3,2,3,2,1]
                    },
                    {
                        label: "Unloaded",
                        backgroundColor: "#42a5f5",
                        data: [4,3,5,8,4,3,4,3,2,3,2,1]
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
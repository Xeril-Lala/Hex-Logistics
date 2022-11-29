import React, {useState, useEffect} from "react";
import {Line} from 'react-chartjs-2';

const DailyChart = ({day,dailyData}) => {
    //Bar chart states
    const [barChartData, setBarChartData] = useState({
        datasets: [],
    });
    const timePeriods = dailyData.map(data=> data.timePeriod);
    const loadedData = dailyData.map(data=>data.loaded);
    const unloadedData = dailyData.map(data=>data.unloaded);
    const allValues = loadedData.concat(unloadedData);
    const maxValue = Math.max(...allValues);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: maxValue+(10-maxValue%10),
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
                text: "Daily loaded statistics",
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
            labels: timePeriods,
            datasets : [
                {
                    label: "Loaded",
                    backgroundColor: "#ef5350",
                    data:loadedData,
                    fill: false,
                    borderColor: '#ef5350',
                    tension: 0.2,
                    pointRadius: 4,
                    pointHoverRadius: 4
                },
                {
                    label: "Unloaded",
                    backgroundColor: "#42a5f5",
                    data: unloadedData,
                    fill: false,
                    borderColor: '#42a5f5',
                    tension: 0.2,
                    pointRadius: 4,
                    pointHoverRadius: 4
                }
            ]
        });
    }, [dailyData]);

    return ( 
        <div className="card chart mx-40 px-36 py-10">
            <p>{day}</p>
            <Line data={barChartData} options={options} />
        </div>
     );
}
 
export default DailyChart;
import  { Fragment, useState, useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';

const DailyProgress = ({loaded,unloaded}) => {
    //Loaded chart data
    const [loadedChartData, setLoadedChartData] = useState({
        datasets: [],
    });

    //Unloaded chart data
    const [unloadedChartData, setUnloadedChartData] = useState({
        datasets: [],
    });

    const options = {
        responsive: true,
        events: [],
        cutout: '80%',
        plugins: {
            legend: {
                display: false
            }
        }
    };

        //Loaded chart setup
        useEffect(() => {
            const percentage = loaded?.percentage;
            let emptySpaceChart = 100-percentage < 0 ? 0 : 100-percentage;
            setLoadedChartData({
                labels: ["Meta completada"],
                datasets: [
                    {
                        label: "First",
                        backgroundColor: ["#ef5350", "#e0e0e0"],
                        data: [percentage, emptySpaceChart]
                    }
                ],
                text: '20%'
            });
        }, [loaded]);
    
        //Unloaded chart setup
        useEffect(() => {
            const percentage = unloaded?.percentage;
            let emptySpaceChart = 100-percentage < 0 ? 0 : 100-percentage;
            setUnloadedChartData({
                labels: ["Meta completada"],
                datasets: [
                    {
                        label: "First",
                        backgroundColor: ["#ef5350", "#e0e0e0"],
                        data: [percentage, emptySpaceChart]
                    }
                ]
            });
        }, [unloaded]);

    return ( 
        <div className="grid grid-cols-2 gap-8 col-span-3">
            <div className="card flex flex-col place-items-center mt-4">
                <div className=" text-2xl ml-2 mt-4 font-bold text-slate-600 float-left">Loaded progress</div>
                <div className="relative w-44 mt-6">
                    <Doughnut data={loadedChartData} options={options} />
                    <div className="percentageGoalChart">
                        <p className="text-3xl">{loaded?.percentage}%</p>
                        <p className="text-2sxl">{loaded?.current} / {loaded?.goal}</p>
                    </div>
                </div>
            </div>
            <div className="card flex flex-col place-items-center mt-4">
                <div className=" text-2xl ml-2 mt-4 font-bold text-slate-600 float-left">Unloaded progress</div>
                <div className="relative w-44 mt-6">
                    <Doughnut data={unloadedChartData} options={options} />
                    <div className="percentageGoalChart">
                        <p className="text-3xl">{unloaded?.percentage}%</p>
                        <p className="text-2sxl">{unloaded?.current} / {unloaded?.goal}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DailyProgress;
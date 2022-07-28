import React, { Fragment, useState, useEffect } from "react";
import './Dashboard.css';
import {Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ListBays from "./ListBays";
import DailyChart from "./DailyChart";
import WeeklyChart from "./WeeklyChart";
import { getBaysData } from "../../services/baysData";
import { getDailyData } from "../../services/dailyData";
import { getWeeklyData } from "../../services/weeklyData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dailyData, setDailyData] = useState({});
    const [weeklyData, setWeeklyData] = useState({});
    const [bays, setBays] = useState([]);
    const [generalBays, setGeneralBays] = useState({});

    //get and assign data
    useEffect(()=>{
        const requestBaysData = async ()=>{
            const result = await getBaysData();
            console.log(result);
            setBays(result.details);
            setGeneralBays(result.general);
        }

        const requestDailyData = async ()=>{
            const result = await getDailyData();
            console.log(result);
            setDailyData(result);
            setIsLoading(false);
        }

        const requestWeeklyData = async ()=>{
            const result = await getWeeklyData();
            console.log(result);
            setWeeklyData(result);
        }
        setIsLoading(true);
        requestBaysData();
        requestDailyData();
        requestWeeklyData();

        ///QUITA LOS COMENTARIOS PARA CARGAR AUTOMATICAMENTE

        const interval= setInterval(()=>{
            requestBaysData();
            requestDailyData();
            requestWeeklyData();
        },1000)
        return ()=>clearInterval(interval);  
    },[]);

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

    //Loaded chart data
    const [loadedChartData, setLoadedChartData] = useState({
        datasets: [],
    });

    //Unloaded chart data
    const [unloadedChartData, setUnloadedChartData] = useState({
        datasets: [],
    })
    const loaded = dailyData?.general?.loaded;
    const unloaded = dailyData?.general?.unloaded;
    
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

    if(isLoading){
        return <div>Loading</div>
    }

    return (
        <Fragment>
            <div className=" grid grid-cols-2 lg:grid-cols-5 gap-10 xl:mx-40 mx-4 py-5">
                <div className="mt-4">
                    <div className="card flex">
                        <div className="icon bg-green-500 flex place-items-center justify-center rounded w-16">
                            <i className="fa-regular fa-circle-check text-white  text-2xl"></i>
                        </div>
                        <div className="flex w-3/4 flex-col place-content-center">
                            <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Available</div>
                            <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.available}</p>
                        </div>
                    </div>

                    <div className="card mt-4 flex">
                        <div className="icon bg-blue-500 flex place-items-center justify-center rounded w-16">
                            <i className="uil uil-arrow-circle-up text-white text-4xl"></i>
                        </div>
                        <div className="flex w-3/4  flex-col place-content-center">
                            <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Loading</div>
                            <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.loading}</p>
                        </div>
                    </div>

                    <div className="card mt-4 flex">
                        <div className="icon bg-orange-400 flex place-items-center justify-center rounded w-16">
                            <i className="uil uil-clock text-white text-4xl"></i>
                        </div>
                        <div className="flex w-3/4  flex-col place-content-center">
                            <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Waiting to load</div>
                            <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.waitingLoad}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="card flex">
                        <div className="icon bg-red-500 flex place-items-center justify-center rounded w-16">
                            <i className="fa-regular fa-circle-xmark text-white bg-red-500 text-2xl"></i>
                        </div>
                        <div className="flex w-3/4 flex-col place-content-center">
                            <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Unavailable</div>
                            <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.unavailable}</p>
                        </div>
                    </div>

                    <div className="card mt-4 flex">
                        <div className="icon bg-blue-500 flex place-items-center justify-center rounded w-16">
                            <i className="uil uil-arrow-circle-down text-white text-4xl"></i>
                        </div>
                        <div className="flex w-3/4 flex-col place-content-center">
                            <div className=" text-lg ml-2 mt-1 font-bold text-slate-600  float-left">Unloading</div>
                            <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.unloading}</p>
                        </div>
                    </div>

                    <div className="card mt-4 flex">
                        <div className="icon bg-orange-400 flex place-items-center justify-center rounded w-16">
                            <i className="uil uil-clock text-white text-4xl"></i>
                        </div>
                        <div className="flex w-3/4 flex-col place-content-center">
                            <div className=" text-lg ml-2 mt-1 font-bold text-slate-600 float-left">Waiting to unload</div>
                            <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.waitingUnload}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 col-span-3">
                    <div className="card flex flex-col place-items-center ">
                        <div className=" text-2xl ml-2 mt-4 font-bold text-slate-600 float-left">Loaded progress</div>
                        <div className="relative w-44 mt-6">
                            <Doughnut data={loadedChartData} options={options} />
                            <div className="percentageGoalChart">
                                <p className="text-3xl">{loaded?.percentage}%</p>
                                <p className="text-2sxl">{loaded?.current} / {loaded?.goal}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col place-items-center ">
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
            </div>
            
            <ListBays
                bays={bays}
            />
            <DailyChart 
                day={dailyData.day}
                dailyData={dailyData.data}
            />
            <WeeklyChart 
                week={weeklyData.week}
                weeklyData={weeklyData.data}
            />
        </Fragment>
    );
}

export default Dashboard;
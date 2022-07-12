import React, {Fragment, useState, useEffect} from "react";
import './Dashboard.css';
import {Chart as ChartJS, 
    CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement,Title,Tooltip,Legend,ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import ListBays from "./ListBays";
import DailyChart from "./DailyChart";
import WeeklyChart from "./WeeklyChart";
import { getDashboardData } from "../../services/dashboardApi";

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


    const [loadedGoal,setLoadedGoal] = useState({});
    const [unLoadedGoal,setUnloadedGoal] = useState({});
    const [bays, setBays] = useState([]);
    const [generalBays, setGeneralBays] = useState({});

    useEffect(() =>{
        const requestDashboardData = async () => {
            const result = await getDashboardData();
            setLoadedGoal(result.data.loaded);
            setUnloadedGoal(result.data.unloaded);
            setGeneralBays(result.data.bays.general)
            setBays(result.data.bays.specific);
        }
        requestDashboardData();
    },[]);

    const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 90).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                ctx.fillStyle = '#FFFFFF';
             } else{
                ctx.fillStyle = 'rgb(30 41 59)';
             }

             if (chart.data.datasets[0]){
                var current = chart.data.datasets[0].data[0],
                goal = (chart.data.datasets[0].data[1] + current),
                percentage = parseInt(current/goal*100),
                text = `${percentage}%`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2.9;
                ctx.fillText(text, textX, textY);

                fontSize = (height / 120).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                var text2 = `${current} / ${goal}`,
                text2X = Math.round((width - ctx.measureText(text2).width) / 2),
                text2Y = textY*1.7;
            }

             ctx.fillText(text2,text2X, text2Y);
             ctx.save();
        } 
      }];

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

    //Loaded chart data
    const [loadedChartData, setLoadedChartData] = useState({
        datasets: [],
    });

    //Unloaded chart data
    const [unloadedChartData, setUnloadedChartData] = useState({
        datasets: [],
    })

    //Loaded chart setup
    useEffect(() => {
        const {current,goal} = loadedGoal;
        setLoadedChartData({ 
            labels: ["Meta completada"],
            datasets : [
                {
                    label: "First",
                    backgroundColor: ["#ef5350", "#e0e0e0"],
                    data:[current,goal-current]
                }
            ],
            text: '20%'
        });
    }, [loadedGoal]);

    //Unloaded chart setup
    useEffect(() => {
        const {current,goal} = unLoadedGoal;
        setUnloadedChartData({ 
            labels: ["Meta completada"],
            datasets : [
                {
                    label: "First",
                    backgroundColor: ["#ef5350", "#e0e0e0"],
                    data:[current,goal-current]
                }
            ]
        });
    },[unLoadedGoal]);

    return ( 
        <Fragment>
            <div className=" grid grid-cols-2 lg:grid-cols-6 gap-10 xl:mx-40 mx-4 py-5">
                <div>
                    <div className="card">
                        <div className=" text-xl mt-2">Loading</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-5xl mb-5">{generalBays.loading}</p>
                    </div>
                    <div className="card mt-4">
                        <div className=" text-xl mt-2">Unloading</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-5xl mb-5">{generalBays.unloading}</p>
                    </div>
                </div>

                <div>
                    <div className="card">
                        <div className=" text-xl mt-2">Available</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-5xl mb-5">{generalBays.available}</p>
                    </div>
                    <div className="card mt-4">
                        <div className=" text-xl mt-2">Unavailable</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-5xl mb-5">{generalBays.unavailable}</p>
                    </div>
                </div>

                <div className="card flex flex-col lg:col-span-2 place-items-center ">
                    <p className=" text-2xl">Loaded progress</p>
                    <div className="w-44 mt-4">

                    <Doughnut data={loadedChartData} options={options} plugins={plugins}/>
                    </div>
                </div>

                <div className="card flex flex-col lg:col-span-2 place-items-center ">
                    <div className=" text-2xl">Unloaded progress</div>
                    <div className=" w-44 mt-4">

                    <Doughnut data={unloadedChartData} options={options} plugins={plugins}/>
                    </div>
                </div>
            </div>

            <ListBays
                bays={bays}
            />
            <DailyChart/>
            <WeeklyChart />
        </Fragment>
     );
}
 
export default Dashboard;
import React, { Fragment, useState, useEffect } from "react";
import {Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js';
//Components
import ListBays from "./ListBays";
import DailyChart from "./DailyChart";
import WeeklyChart from "./WeeklyChart";
import TotalBays from "./TotalBays";
import DailyProgress from "./DailyProgress";
//Styles
import '../../styles/Dashboard.css';
import '../../styles/Colors.css';
//Api endpoints
import { getBaysData } from "../../services/baysData";
import { getDailyData } from "../../services/dailyData";
import { getWeeklyData } from "../../services/weeklyData";
import Spinner from "../Spinner";

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
    const loadData = () =>{
        Promise.all([getWeeklyData(),getDailyData(),getBaysData(),getBaysData()]).then((data)=>{
            setWeeklyData(data[0])
            setDailyData(data[1])
            setBays(data[2].details)
            setGeneralBays(data[3].general)
        }).catch(error=>{
            console.log(error);
        }).finally(()=>{
            setIsLoading(false);
        })
    }

    //assign data
    useEffect(()=>{
        setIsLoading(true);
        loadData();

        const interval= setInterval(()=>{
            loadData();
        },1000)
        return ()=>clearInterval(interval);  
    },[]);

    const loaded = dailyData?.general?.loaded;
    const unloaded = dailyData?.general?.unloaded;

    if(isLoading){
        return <Spinner />
    }

    return (
        <Fragment>
            <div className=" grid grid-cols-2 lg:grid-cols-5 gap-10 xl:mx-40 mx-4 py-5">
                <TotalBays 
                    generalBays = {generalBays}
                />
                <DailyProgress
                    loaded = {loaded}
                    unloaded = {unloaded}
                />
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
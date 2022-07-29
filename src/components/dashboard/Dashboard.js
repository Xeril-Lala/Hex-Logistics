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
import './Dashboard.css';
import '../../styles/Colors.css';
//Api endpoints
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


    const loaded = dailyData?.general?.loaded;
    const unloaded = dailyData?.general?.unloaded;

    if(isLoading){
        return <div>Loading</div>
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
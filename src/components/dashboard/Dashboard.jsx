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
import { connectWebsocket } from "../../services/webSocket";

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
    const [connection, setConnection]= useState();

    const [generalBays, setGeneralBays] = useState({});
    const [bays, setBays] = useState([]);
    const [dailyData, setDailyData] = useState({});
    const [weeklyData, setWeeklyData] = useState({});


    const loadBays = async () =>{
        try{
            const result = await getBaysData();
            console.log(result.details);
            setBays(result.details);
        } catch(error) { console.log(error);}
    }

    const loadDashboard = () =>{
        Promise.all([getBaysData(),getDailyData(),getWeeklyData()])
        .then(([bays,daily,weekly])=>{
            setGeneralBays(bays.general)
            setDailyData(daily);
            setWeeklyData(weekly);
        }).catch(error=>{
            console.log(error);
        })
    }

    //assign data
    useEffect(()=>{
        setIsLoading(true);
        //Load all data
        Promise.all([getBaysData(),getDailyData(),getWeeklyData()])
        .then(([bays,daily,weekly])=>{
            setGeneralBays(bays.general);
            setBays(bays.details);
            setDailyData(daily);
            setWeeklyData(weekly);
        }).catch(error=>{
            console.log(error);
        }).finally(()=>{
            setIsLoading(false);
            //Connect to websocket
            setConnection(connectWebsocket);
        })
    },[]);

    useEffect(() => {
        if (connection) {
            console.log("Loading connection...");
            (async () => {
              await connection.start();
              console.log("Websocket Connected.");
              connection.on("LoadBays",async () => {
                loadBays();
              });
              connection.on("LoadDashboard",async () => {
                loadDashboard();
              });
          })();
        }
      }, [connection])

    if(isLoading){
        return <Spinner />
    }

    return (
        <Fragment>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 xl:mx-40 mx-4 py-5">
                <TotalBays 
                    generalBays = {generalBays}
                />
                <DailyProgress
                    loaded = {dailyData?.general?.loaded}
                    unloaded = {dailyData?.general?.unloaded}
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
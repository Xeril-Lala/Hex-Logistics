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
import useDashboard from "../../hooks/useDashboard";
import { SiHexo } from "react-icons/si"


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
    const {isLoading,bays, generalBays,dailyData,weeklyData} = useDashboard()
    if(isLoading){
        return <div className="h-screen"></div>
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
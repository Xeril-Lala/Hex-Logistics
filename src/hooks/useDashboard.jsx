import { useState, useEffect } from "react";
import { getBaysData } from "../services/baysData";
import { connectWebsocket, socket } from "../services/webSocket";
import { getDailyData,getWeeklyData } from "../services/statisticsData";
import useBays from "./useBays";

export const useDashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [connection, setConnection]= useState();

    const [bays, setBays] = useState([]);
    const [generalBays, setGeneralBays] = useState({});
    const [dailyData, setDailyData] = useState({});
    const [weeklyData, setWeeklyData] = useState({});

    const {loadBays} = useBays(setBays);

    const loadDashboard = () =>{
        Promise.all([getBaysData(),getDailyData(),getWeeklyData()])
        .then(([bays,daily,weekly])=>{
            console.log("aaaaaaaaaa");
            setGeneralBays(bays.general)
            setDailyData(daily);
            setWeeklyData(weekly);
        }).catch(error=>{
            console.log(error);
        })
    }
        useEffect(()=>{
            setIsLoading(true);
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
                setConnection(socket);
            })
        },[]);

        useEffect(() => {
            if (connection) {
                console.log("Loading connection...");
                (async () => {
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

          return {
            generalBays,
            dailyData,
            weeklyData,
            bays,
            isLoading
        }
  }
  
  export default useDashboard;
  
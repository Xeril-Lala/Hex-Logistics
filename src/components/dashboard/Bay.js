import React, { Fragment,useState,useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';

const Bay = ({bay}) => {

    let { name,personal,status, status:{icon}, guideNumber } = bay;
    let percentage = bay.times === null ? null  : bay.times.percentage;
    let timeLapsed = bay.times === null ? null  : bay.times.timeLapsed;

    let statusIcon = status.id === 'LG' ? 'text-green-600'
    : status.id === 'UG' ? 'text-blue-600'
    : status.id === 'WL' ? 'text-yellow-600'
    : status.id === 'WU' ? 'text-yellow-600'
    : status.id === 'UE' ? 'text-black-600'
    : status.id === 'text-black'

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

    //Loaded chart states
    const [loadedChartData, setLoadedChartData] = useState({
        datasets: [],
    });

    //Loaded chart setup
    useEffect(() => {
        setLoadedChartData({ 
            labels: ["Meta completada"],
            datasets : [
                {
                    label: "First",
                    backgroundColor: ["#3B7FB6", "#e0e0e0"],
                    data:[percentage,100-percentage]
                }
            ]        
        });
    }, [percentage]);

    if (status.id !== 'UE'){
        return ( 
            <Fragment>
                <div className="card">
                    <h1 className="">{name}</h1>
                    <div className="flex flex-row justify-between">
                        <div className="ml-5 flex items-center ">
                            <i className={`mr-1.5 uil uil-${icon} ${statusIcon}`}></i>
                            <label className="text-lg"> {timeLapsed} </label>
                        </div>
                        <div className="mr-5 flex items-center">
                            <i className="mr-1.5 uil uil-user-md"> </i>
                            <label className="text-lg">{personal}</label>
                        </div>
                    </div>
                    <div className="relative  mx-auto w-9/12 2xl:w-44 p-[12px]">
                    <Doughnut data={loadedChartData} options={options} />
                    <p className="percentageChart text-lg 2xl:text-[27px]">{percentage}%</p>
                    </div>
                    <div className="information flex flex-row justify-between">
                        <div className="guideNumber ml-5">{guideNumber}</div>
                        <div className="guideNumber mr-5">{guideNumber}</div>
                    </div>
                    
                </div>
                
            </Fragment>
         );
    } else {
        return ( 
            <Fragment>
                <div className="card">
                    <h1 className="title">{name}</h1>
                    <div className="flex flex-col center-between mt-2">
                        <label className="message-unavailable text-red-600 text-2xl">{status.text}</label>
                        <div className="content-img">
                            <div className="truck absolute ml-20 mt-6">
                            <i className="uil uil-truck text-7xl"></i>
                            </div>
                            <div className="triangle absolute ml-32 z-10 mt-4">
                            <i className="fa-solid fa-triangle-exclamation  text-red-600 text-5xl"></i>
                            </div>
                           
                            
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Bay;


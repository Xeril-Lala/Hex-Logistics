import React, { Fragment,useState,useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';

const Bay = ({bay}) => {
    const { name,personal,status, status:{icon,text,color}, guideNumber, material } = bay;
    const percentage = bay.times === null ? null  : bay.times.percentage;
    const timeLapsed = bay.times === null ? null  : bay.times.timeLapsed;

    console.log(bay);
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
            labels: ["Goal"],
            datasets : [
                {
                    label: "First",
                    backgroundColor: ["#3B7FB6", "#e0e0e0"],
                    data:[percentage, 100-percentage]
                }
            ]        
        });
    }, [percentage]);

        return ( 
            <div className="card">
                <p className="text-xl mt-2">{name}</p>
                {
                    status._id === 'AE' ? (
                        <div className="flex flex-col justify-between mt-2">
                            <label className="message-unavailable font-medium text-2xl">{text}</label>
                            <div className="content-img flex justify-center mt-5">
                                    <i className="uil uil-check-circle block text-green-600 text-8xl"></i>
                            </div>
                        </div>
                    ) : status._id === 'UE' ? (
                        <div className="flex flex-col justify-between mt-2">
                            <label className="message-unavailable font-medium text-2xl">{text}</label>
                            <div className="content-img flex justify-center mt-9">
                                <div className="relative">
                                    <i className="uil uil-truck block text-7xl"></i>
                                    <i className="fa-solid fa-triangle-exclamation absolute bottom-10 left-12 text-red-600 text-5xl"></i>
                                </div>
                            </div>
                        </div>
                    ) : //Loading  / Unloading
                        <Fragment>
                            <div className="flex flex-row justify-between">
                                <div className="ml-5 flex items-center ">
                                    <i className={`mr-1.5 uil uil-${icon} ${color} `}></i>
                                    <label className="text-xl"> {timeLapsed} </label>
                                </div>
                                <div className="mr-5 flex items-center">
                                    <i className="mr-1.5 uil uil-user-md"> </i>
                                    <label className="text-xl">{personal}</label>
                                </div>
                            </div>
                            <div className="relative mx-auto w-9/12 2xl:w-44 p-[12px]">
                                <Doughnut data={loadedChartData} options={options} />
                                <p className="percentageChart text-lg 2xl:text-[27px]">{percentage}%</p>
                            </div>
                            {
                                status._id !== 'WL' && status._id !== 'WU' ? (
                                    <div className="information flex flex-row justify-between mb-1">
                                        <div className="ml-5 text-lg ml-2 mt-2">{material}</div>
                                        <div className="mr-5 text-lg ml-2 mt-2">{guideNumber}</div>
                                    </div>
                                ) :
                                    <div className="information flex flex-row justify-between mb-1">
                                        <div className="ml-5 text-lg ml-2 mt-2"> </div>
                                        <div className="mr-5 text-lg ml-2 mt-2"> </div>
                                    </div>
                        
                            }
                        
                        </Fragment>

                }
            </div>
        );
}

export default Bay;


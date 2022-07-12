import React, { Fragment,useState,useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';

const Bay = ({bay}) => {
    const { name,people,time,status, status:{icon}, chart:{percentage,current,goal} } = bay;

    const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 90).toFixed(2);
             if(window.matchMedia('(prefers-color-scheme: dark)').matches)
             ctx.fillStyle = '#FFFFFF';
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             if (chart.data.datasets[0]){
                var text = `${percentage}`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2.4;
                ctx.fillText(text, textX, textY);
            }
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

    //Loaded chart states
    const [loadedChartData, setLoadedChartData] = useState({
        datasets: [],
    });

    let statusIcon = status.id === 'LG' ? 'text-green-600'
    : status.id === 'LG' ? 'text-green-600'
    : status.id === 'UG' ? 'text-blue-600'
    : status.id === 'WG' ? 'text-yellow-600'
    : status.id === 'UE' ? 'text-black-600'
    : status.id === 'text-black'

    //Loaded chart setup
    useEffect(() => {
        setLoadedChartData({ 
            labels: ["Meta completada"],
            datasets : [
                {
                    label: "First",
                    backgroundColor: ["#3B7FB6", "#e0e0e0"],
                    data:[current,goal-current]
                }
            ]        
        });
    }, [current,goal]);

    return ( 
        <Fragment>
            <div className="card">
                <h1 className="title">{name}</h1>
                <div className="flex flex-row justify-between">
                    <div className="ml-5">
                        <i className={`uil uil-${icon} ${statusIcon}`}></i>
                        <label className="time"> {time} </label>
                    </div>
                    <div className="mr-5">
                        <i className="uil uil-user-md"> </i>
                        <label className="person">{people}</label>
                    </div>
                </div>
                <div className="mx-auto w-9/12 2xl:w-44 p-[12px]">
                <Doughnut data={loadedChartData} options={options} plugins={plugins}/>

                </div>
            </div>
            
        </Fragment>
     );
}
 
export default Bay;


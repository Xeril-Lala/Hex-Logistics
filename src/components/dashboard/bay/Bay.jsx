import React, { Fragment } from "react";
import Percentage from "./Percentage";
import TimeLapsed from "./TimeLapsed";

const Bay = ({bay}) => {
    const { name,personal,status, status:{icon,text,color}, guideNumber, material,times } = bay;
    console.log(bay);

        return ( 
            <div className="card">
                <p className="text-xl mt-2">{name}</p>
                {
                    status._id === 'AE' ? (
                        <div className="flex flex-col justify-between mt-2">
                            <label className="message-unavailable font-medium text-2xl">{text}</label>
                            <div className="content-img flex justify-center mt-5">
                                    <i className="uil uil-check-circle block text-green-600 text-9xl"></i>
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
                                    <TimeLapsed
                                        times = {times}
                                    />                                 
                                </div>
                                <div className="mr-5 flex items-center">
                                    <i className="mr-1.5 uil uil-user-md"> </i>
                                    <label className="text-xl">{personal}</label>
                                </div>
                            </div>
                            <Percentage
                                times = {times}
                            />
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


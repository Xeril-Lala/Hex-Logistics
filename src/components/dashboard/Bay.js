import './Bay.css';
import React, {useState,useEffect} from "react";
import { Fragment } from "react";


const Bay = () => {
    return(
        <Fragment>
            <div className="content">
                <div className="Bay">
                    <h1 className="title"> Bahia 1 </h1>
                    <div className="time-person">
                        <div className="time-content">
                            <i className="uil uil-arrow-circle-up"></i>
                            <label className="time"> 10:00 </label>
                        </div>
                        <div className="person-content">
                            <i className="uil uil-user-md"> </i>
                            <label className="person">3</label>
                        </div>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="Bay">
                    <h1 className="title"> Bahia 2 </h1>
                    <div className="time-person">
                        <div className="time-content">
                            <i className="uil uil-arrow-circle-down"> </i>
                            <label className="time"> 10:00 </label>
                        </div>
                        <div className="person-content">
                            <i className="uil uil-user-md"> </i>
                            <label className="person">3</label>
                        </div>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="Bay">
                    <h1 className="title"> Bahia 3 </h1>
                    <div className="time-person">
                        <div className="time-content">
                            <i class="uil uil-clock"> </i>
                            <label className="time"> 00:00 </label>
                        </div>
                        <div className="person-content">
                            <i className="uil uil-user-md"> </i>
                            <label className="person">0</label>
                        </div>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="Bay">
                    <h1 className="title"> Bahia 4 </h1>
                    <div className="time-person">
                        <div className="time-content">
                            <i className="uil uil-minus-circle"> </i>
                            <label className="time"> 00:00 </label>
                        </div>
                        <div className="person-content">
                            <i className="uil uil-user-md"> </i>
                            <label className="person">0</label>
                        </div>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="Bay">
                    <h1 className="title"> Bahia 5 </h1>
                    <div className="time-person">
                        <div className="time-content">
                            <i className="uil uil-arrow-circle-down"> </i>
                            <label className="time"> 07:00 </label>
                        </div>
                        <div className="person-content">
                            <i className="uil uil-user-md"> </i>
                            <label className="person">5</label>
                        </div>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="Bay">
                    <h1 className="title"> Bahia 6 </h1>
                    <div className="time-person">
                        <div className="time-content">
                            <i className="uil uil-arrow-circle-up"> </i>
                            <label className="time">12:00 </label>
                        </div>
                        <div className="person-content">
                            <i className="uil uil-user-md"> </i>
                            <label className="person">2</label>
                        </div>
                    </div>
                    <div className="chart"></div>
                </div>
            </div>
        </Fragment>
    );

}
export default Bay;
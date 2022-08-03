import { Fragment } from "react";

const TotalBays = ({generalBays}) => {

    return ( 
        <Fragment>
            <div>
                <div className="card mt-4 flex">
                    <div className="icon bg-green-500 flex place-items-center justify-center rounded w-16">
                        <i className="fa-regular fa-circle-check text-white  text-3xl"></i>
                    </div>
                    <div className="flex w-3/4 flex-col place-content-center">
                        <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Available</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.available}</p>
                    </div>
                </div>
                <div className="card mt-4 flex">
                    <div className="icon bg-blue-500 flex place-items-center justify-center rounded w-16">
                        <i className="uil uil-arrow-circle-up text-white text-4xl"></i>
                    </div>
                    <div className="flex w-3/4  flex-col place-content-center">
                        <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Loading</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.loading}</p>
                    </div>
                </div>
                <div className="card mt-4 flex">
                    <div className="icon bg-orange-400 flex place-items-center justify-center rounded w-16">
                        <i className="uil uil-clock text-white text-4xl"></i>
                    </div>
                    <div className="flex w-3/4  flex-col place-content-center">
                        <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Waiting to load</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.waitingLoad}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="card flex">
                    <div className="icon bg-red-500 flex place-items-center justify-center rounded w-16">
                        <i className="fa-regular fa-circle-xmark text-white bg-red-500 text-3xl"></i>
                    </div>
                    <div className="flex w-3/4 flex-col place-content-center">
                        <div className=" text-lg ml-2 mt-1  font-bold text-slate-600  float-left">Unavailable</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.unavailable}</p>
                    </div>
                </div>
                <div className="card mt-4 flex">
                    <div className="icon bg-blue-500 flex place-items-center justify-center rounded w-16">
                        <i className="uil uil-arrow-circle-down text-white text-4xl"></i>
                    </div>
                    <div className="flex w-3/4 flex-col place-content-center">
                        <div className=" text-lg ml-2 mt-1 font-bold text-slate-600  float-left">Unloading</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.unloading}</p>
                    </div>
                </div>
                <div className="card mt-4 flex">
                    <div className="icon bg-orange-400 flex place-items-center justify-center rounded w-16">
                        <i className="uil uil-clock text-white text-4xl"></i>
                    </div>
                    <div className="flex w-3/4 flex-col place-content-center">
                        <div className=" text-lg ml-2 mt-1 font-bold text-slate-600 float-left">Waiting to unload</div>
                        <p className="dark:text-gray-300 text-slate-700 font-bold text-4xl mb-2 ">{generalBays.waitingUnload}</p>
                    </div>
                </div>
            </div>
        </Fragment> 
    );
}
 
export default TotalBays;
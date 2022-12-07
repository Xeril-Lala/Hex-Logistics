import React from 'react';
import { useState } from "react";
import "./Historic.css"
import { useHistoric } from "../../hooks/useHistoric";

//icon imports
import { BsBookmarkDash, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { HiOutlineArrowCircleDown, HiOutlineArrowCircleUp } from 'react-icons/hi';
import { TbAlertCircle } from 'react-icons/tb';
import { LogLevel } from '@microsoft/signalr';
const Historic = () => {

	const { logs, loadingLogs } = useHistoric()

	if(loadingLogs){
        return <div className="h-full w-full"></div>
    }

    return (
<div className="grid grid-cols-auto mx-0 py-5 w-full">
			{logs.map(log=>(
				
        		<div className="grid w-screen overflow-hidden auto-cols-auto  gap-10 p-10 place-content-center">
				{
					log.status._id ==='WL' && log.queueStatus === 1 ?(
						console.log(log),
						<div className="
								grid 
								overflow-hidden 
								grid-cols-6 
								gap-0 
								gap-x-0 
								grid-flow-col 
								w-[99%] 
								h-full 
								rounded-xl
								shadow-xl
								bg-white">
									
						
							<div className="
									
									col-start-1 
									col-span-1
									bg-blue-500
									text-gray-900
									h-42
									p-12
									mr-auto
									">
										<HiOutlineArrowCircleDown className="text-5xl text-white"/>	
							</div>
							
							<div className="
									col-span-2
									bg-white
									text-gray-900
									w-11/12
									h-full
									mx-0
									px-8
									">
										<p className="pt-2 ">
											<p className="text-xl m-2 whitespace-nowrap text-left">Invoice Number: 
											&nbsp;{log.invoiceNumber}
											</p>
											<p className="text-xl m-2 whitespace-nowrap text-left">Tracking Number: 
											&nbsp;{log.trackingNumber}
											</p>
											<p className="text-xl  m-2 whitespace-nowrap text-left">Date of Delivery:
											&nbsp;{log.estimatedDate}
											</p>
										</p>
							</div>
							<div className="
									col-span-2
									bg-white
									text-gray-900
									w-full
									h-full
									mx-0
									pl-4
									">
										<p className="pt-2 ">
											<p className="text-xl m-2 whitespace-nowrap text-left">Delivery Location:
											&nbsp;{log.deliveryAddress}
											</p>
											<p className="text-xl m-2 whitespace-nowrap text-left">Delivered Material:
											&nbsp;{log.material.name}
											</p>
											<p className="text-xl m-2 whitespace-nowrap text-left">Vendor:
											&nbsp;{log.vendor}
											</p>
										</p>
							</div>

							<div className="
									
									col-start-6 
									col-span-1
									bg-green-500
									text-gray-900
									h-42
									p-12
									ml-auto
									">
										<BsCheckCircle className="text-5xl text-white"/>
							</div>
						
						</div>
					) :  

					
					<div className="
					grid 
					overflow-hidden 
					grid-cols-6 
					gap-0 
					gap-x-0 
					grid-flow-col 
					w-[99%] 
					h-full 
					rounded-xl
					shadow-xl
					bg-white">
						
			
				<div className="
						
						col-start-1 
						col-span-1
						bg-blue-500
						text-gray-900
						h-42
						p-12
						mr-auto
						">
							<HiOutlineArrowCircleDown className="text-5xl text-white"/>	
				</div>
				
				<div className="
						col-span-2
						bg-white
						text-gray-900
						w-11/12
						h-full
						mx-4
						px-8
						">
							<p className="pt-2 ">
								<p className="text-xl m-2 whitespace-nowrap text-left">Invoice Number: 
								&nbsp;{log.invoiceNumber}
								</p>
								<p className="text-xl m-2 whitespace-nowrap text-left">Tracking Number: 
								&nbsp;{log.trackingNumber}
								</p>
								<p className="text-xl  m-2 whitespace-nowrap text-left">Delivery ETA:
								&nbsp;{log.estimatedDate}
								</p>
							</p>
				</div>
				<div className="
						col-span-2
						bg-white
						text-gray-900
						w-full
						h-full
						mx-0
						pl-4
						">
							<p className="pt-2 ">
								<p className="text-xl m-2 whitespace-nowrap text-left">Delivery Location:
								&nbsp;{log.deliveryAddress}
								</p>
								<p className="text-xl m-2 whitespace-nowrap text-left">Delivered Material:
								&nbsp;{log.material.name}
								</p>
								<p className="text-xl m-2 whitespace-nowrap text-left">Vendor:
								&nbsp;{log.vendor}
								</p>
							</p>
				</div>

				<div className="
						
						col-start-6 
						col-span-1
						bg-yellow-500
						text-gray-900
						h-42
						p-12
						ml-auto
						">
							<TbAlertCircle className="text-5xl text-white"/>
				</div>
			
			</div>
						}
						</div>
						
					
				))}
				</div>
//log.queueStatus === 1 ?()

      );
};

export default Historic;







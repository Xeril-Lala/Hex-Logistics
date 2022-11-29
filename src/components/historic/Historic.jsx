import React from 'react';
import { useState } from "react";
import "./Historic.css"


//icon imports
import {BsBookmarkDash, BsCheckCircle} from 'react-icons/bs'
import {AiOutlineDownCircle} from 'react-icons/ai'


const Historic = () => {



    return (
        <div class="grid grid-cols-auto gap-10  mx-4 py-5">
        <div class="grid w-screen overflow-hidden auto-cols-auto auto-rows-auto gap-10 p-10">

            <div class="grid 
			overflow-hidden 
			grid-cols-6 
			auto-rows-auto 
			gap-0 
			gap-x-0 
			grid-flow-col 
			w-11/12 
			h-full 
			rounded-xl
			shadow-xl
			bg-white">
				<div class="
				row-start-1 
				row-span-2 
				col-start-1 
				col-span-1
				bg-yellow-300
				text-gray-900
				h-32
				p-12
				mr-auto
				">
					<BsBookmarkDash className="text-4xl"/>
				</div>

				<div class="
				col-span-4
				bg-white
				text-gray-900
				h-24
				">2
				</div>

				<div class="
				row-start-1 
				row-span-2 
				col-start-6
				bg-green-400
				text-gray-900
				h-32
				p-12
				ml-auto
				">
					<BsCheckCircle className="text-4xl"/>
				</div>

				<div class="
				row-start-2 
				col-start-2 
				col-span-4
				bg-white
				text-gray-900
				h-8
				mr-auto ml-auto pt-0
				">
					<AiOutlineDownCircle className="text-2xl"/>
				</div>
			</div>
        </div>
        </div>
      );
};

export default Historic;







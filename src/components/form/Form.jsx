import "./Form.css";
import React, { useState } from "react";




const Form = () => {

  const [name, setName ] = useState ("");

  const handleInput = event => {
    setName(event.target.value);
  };
  
  const logValue = () => {
    console.log( name );
  };


  return (
    <div className="bg-white h-screen m-11 container w-full grid place-items-center rounded-lg shadow-lg">
      <div class="grid overflow-hidden grid-cols-2 auto-rows-auto gap-x-56 gap-y-0 h-full mt-10">
        <div class="box col-span-2 text-left text-3xl">Material Details</div>
        <div class="box text-left text-xl">
          <label
            for="materialType"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Material Type
          </label>
          <input
            type="text"
            name="materialId"
            className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none"
            id="materialType"
            placeholder="Steel"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="datePurchase"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Date of Purchase
          </label>
          <input
            type="date"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="datePurchase"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="deliveryLocation"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Delivery Address
          </label>
          <input
            type="text"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="deliveryLocation"
            placeholder="742 Evergreen Terrace in Springfield"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="estamatedArrival"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Estimated Date of Arrival
          </label>
          <input
            type="date"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="estamatedArrival"
            placeholder="#123456"
          />
        </div>

        <div class="box col-span-2 text-left text-3xl">Delivery Details</div>

        <div class="box text-left text-xl">
          <label
            for="vendorName"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Vendor
          </label>
          <input
            type="text"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="vendorName"
            placeholder="CISCO"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="trackNumber"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Tracking Number
          </label>
          <input
            type="number"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="trackNumber"
            placeholder="#123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="invoiceNumber"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Invoice Number
          </label>
          <input
            type="number"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="invoiceNumber"
            placeholder="#123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="packingNumber"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Packing Number
          </label>
          <input
            type="number"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="packingNumber"
            placeholder="#123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="onSiteNumber"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            On Site Contact Number
          </label>
          <input
            type="number"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="onSiteNumber"
            placeholder="#123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            for="formFiller"
            class="form-label inline-block mb-2 text-gray-700 text-left"
          >
            On Duty Form Filler
          </label>
          <input
            type="text"
            class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
                "
            id="formFiller"
            placeholder="Frank Mason"
          />
        </div>
      </div>

      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                                py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-10"
      >
        Upload
      </button>
    </div>
  );
};

export default Form;

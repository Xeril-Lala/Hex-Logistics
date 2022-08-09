import "./Form.css";
import React, { useState } from "react";




const Form = () => {

  const [Form, setForm]= useState ({
    materialId:0,
    statusId:"",
    purchaseDate:"",
    estimatedDate:Date.now(),
  });

  const handleInput = event => {
    setForm(event.target.value);
  };
  
  const logValue = () => {
    console.log( );
  };

console.log(Date.new);
  return (
    <form className="bg-white h-full m-11 container w-full grid place-items-center rounded-lg shadow-lg">
      <div class="grid overflow-hidden grid-cols-2 auto-rows-auto gap-x-56 gap-y-0 h-full mt-10">
        <div class="box col-span-2 text-left text-3xl">Material Details</div>
        <div class="box text-left text-xl">
          <label
            class="form-label inline-block mb-2 text-gray-700"
          >
            Material Type
          </label>
          <input
            type="text"
            list="materials"
            name="materialId"
            onchange = { handleInput } 
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
          <datalist id="materials">
          <option value="Steel"/>
          <option value="Plastic"/>
          <option value="Cotton"/>
          <option value="Wood"/>
          </datalist>
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="Destination Address"
          />
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="Brand Name"
          />
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="123456"
          />
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="Site's Phone Number"
          />
        </div>
        <div class="box text-left text-xl">
          <label
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
            placeholder="Uploader Name"
          />
        </div>
        <div class="box text-left text-xl">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-left">
            Load or Unload
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
            placeholder="Load / Unload"
          />
        </div>
      </div>
      <div class="">
      <button
        class="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 mb-10"
        onClick = { logValue }
      >
        Upload
      </button>
      </div>
    </form>
  );
};

export default Form;


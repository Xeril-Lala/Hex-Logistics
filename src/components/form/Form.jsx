import "./Form.css";
import React, { useState } from "react";




const Form = () => {

  const [formData, setForm]= useState ({
    materialId:0,
    statusId:"",
    purchaseDate:Date.now(),
    estimatedDate:Date.now(),
    deliveryAddress:"",
    vendor:"",
    trackingNumber:0,
    invoiceNumber:"",
    contactNumber:"",
    formFiller:"",
  });

  const handleInput= (event) => {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  

      } 

 
  
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      };

console.log(Date.new);
  return (
    <div className="bg-white h-full container w-full grid place-items-center rounded-lg shadow-lg">
      <div class="grid overflow-hidden grid-cols-2 auto-rows-auto gap-x-56 gap-y-0 h-full ">
        <div class="box col-span-2 text-left text-3xl">Material Details</div>
        
        
        <div class="box text-left text-xl">
          <label
            class="form-label inline-block mb-2 text-gray-700"
          >
            Material Type
          </label>
          <input
            required
            type="text"
            list="materials"
            name="materialId"
            onChange = { handleInput } 
            value={ formData.materialId}
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
            required
            type="date"
            name="purchaseDate"
            onChange = { handleInput } 
            value={ formData.purchaseDate }
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
            required
            type="text"
            name="deliveryAddress"
            onChange = { handleInput } 
            value={ formData.deliveryAddress}
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
            required
            type="date"
            name="estimatedDate"
            onChange = { handleInput } 
            value={ formData.estimatedDate}
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
          required
            type="text"
            name="vendor"
            onChange = { handleInput } 
            value={ formData.vendor}
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
            required
            type="number"
            name="trackingNumber"
            onChange = { handleInput } 
            value={ formData.trackingNumber }
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
            required
            type="number"
            name="invoiceNumber"
            onChange = { handleInput } 
            value={ formData.invoiceNumber }
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
            required
            type="number"
            name="packingNumber"
            onChange = { handleInput } 
            //value={ formData.materialId }
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
            required
            type="number"
            name="contactNumber"
            onChange = { handleInput } 
            value={ formData.contactNumber}
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
            required
            maxLength="12"
            type="text"
            name="formFiller"
            onChange = { handleInput } 
            value={ formData.formFiller }
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
            required
            type="text"
            name="loadUnload"
            onChange = { handleInput } 
            //value={ formData.?????????????}
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
        onClick = { handleSubmit }
      >
        Upload
      </button>
      </div>
    </div>
  );
};

export default Form;


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
    <div className=" h-{20000px} bg-white">
      <div className="">

          <div class="">Material Details</div>
          
          
          <div class="">
            <label
              class=""
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
              className=""
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


          <div class="">
            <label
              class=""
            >
              Date of Purchase
            </label>
            <input
              required
              type="date"
              name="purchaseDate"
              onChange = { handleInput } 
              value={ formData.purchaseDate }
              className=""
              id="datePurchase"
            />
          </div>
          
          
          <div class="">
            <label
              class=""
            >
              Delivery Address
            </label>
            <input
              required
              type="text"
              name="deliveryAddress"
              onChange = { handleInput } 
              value={ formData.deliveryAddress}
              className=""
              id="deliveryLocation"
              placeholder="Destination Address"
            />
          </div>


          <div class="">
            <label
              class=""
            >
              Estimated Date of Arrival
            </label>
            <input
              required
              type="date"
              name="estimatedDate"
              onChange = { handleInput } 
              value={ formData.estimatedDate}
              className=""
              id="estamatedArrival"
              placeholder="#123456"
            />
          </div>

          <div class="">Delivery Details</div>

          <div class="">
            <label
              for="vendorName"
              class=""
            >
              Vendor
            </label>
            <input
            required
              type="text"
              name="vendor"
              onChange = { handleInput } 
              value={ formData.vendor}
              className=""
              id="vendorName"
              placeholder="Brand Name"
            />
          </div>


          <div class="">
            <label
              class=""
            >
              Tracking Number
            </label>
            <input
              required
              type="number"
              name="trackingNumber"
              onChange = { handleInput } 
              value={ formData.trackingNumber }
              className=""
              id="trackNumber"
              placeholder="123456"
            />
          </div>

          
          <div class="">
            <label
              class=""
            >
              Invoice Number
            </label>
            <input
              required
              type="number"
              name="invoiceNumber"
              onChange = { handleInput } 
              value={ formData.invoiceNumber }
              className=""
              id="invoiceNumber"
              placeholder="123456"
            />
          </div>


          <div class="">
            <label
              class=""
            >
              Packing Number
            </label>
            <input
              required
              type="number"
              name="packingNumber"
              onChange = { handleInput } 
              //value={ formData.materialId }
              className=""
              id="packingNumber"
              placeholder="123456"
            />
          </div>
          <div class="">
            <label
              class=""
            >
              On Site Contact Number
            </label>
            <input
              required
              type="number"
              name="contactNumber"
              onChange = { handleInput } 
              value={ formData.contactNumber}
              className=""
              id="onSiteNumber"
              placeholder="Site's Phone Number"
            />
          </div>
          <div class="">
            <label
              class=""
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
              className=""
              id="formFiller"
              placeholder="Uploader Name"
            />
          </div>
          <div class="">
            <label
              class="">
              Load or Unload
            </label>
            <input
              required
              type="text"
              name="loadUnload"
              onChange = { handleInput } 
              //value={ formData.?????????????}
              className=""
              id="formFiller"
              placeholder="Load / Unload"
            />
          </div>

          <div class="">
            <button
              class="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 "
              onClick = { handleSubmit }
            >
              Upload
            </button>
          </div>


        </div>
      
    </div>
  );
};

export default Form;


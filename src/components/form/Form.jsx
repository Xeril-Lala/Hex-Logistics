import "./Form.css";
import React, { useState } from "react";
import Select from 'react-select';
import { postFormData } from "../../services/baysData";
import { useNavigate } from "react-router-dom";
import useMaterials from "../../hooks/useMaterials";




const Form = () => {
  const  navigate = useNavigate();

  const { materials } = useMaterials();


  const [formData, setForm]= useState ({
    material:"",
    status:"",
    purchasedDate:"",
    estimatedDate:"",
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
        postFormData(formData);
        navigate('/')
      };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10  mx-4 py-5 p-11  h-screen w-[96vw] ml-[0%] place-items-center ">
      <div className="bg-white rounded-lg shadow-lg h-[54vw] w-[83vw]">
        <div className="grid grid-cols-2 gap-x-48 gap-y-0 p-10 px-[90px] mt-10">

        <div className="box col-span-2 text-left text-3xl">Material Details</div>
             
        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700">
            Material Type
          </label>

          <Select name="material" onChange={(selectedMaterial) =>   
            {setForm({...formData,material: selectedMaterial.value})}} 
            defaultValue={formData.material} 
            options={materials?.map((material)=>({
              value: material?._id,
              label: material?.name
            }))} 
            />
        </div>

        <div className="box text-left text-xl">
          <label
            className="form-label inline-block mb-2 text-gray-700 text-left"
          >
            Date of Purchase
          </label>
          <input
            required
            type="date"
            name="purchasedDate"
            onChange = { handleInput } 
            value={ formData.purchasedDate }
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
            id="datePurchase"
          />
        </div>
        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            Delivery Address
          </label>
          <input
            required
            type="text"
            name="deliveryAddress"
            onChange = { handleInput } 
            value={ formData.deliveryAddress}
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
            id="deliveryLocation"
            placeholder="Destination Address"/>
        </div>

        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            Estimated Date of Arrival
          </label>
          <input
            required
            type="date"
            name="estimatedDate"
            onChange = { handleInput } 
            value={ formData.estimatedDate}
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
            id="estamatedArrival"
            placeholder="#123456"/>
        </div>

        <div className="box col-span-2 mt-12 text-left text-3xl">Delivery Details</div>

        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            Vendor
          </label>
          <input
          required
            type="text"
            name="vendor"
            onChange = { handleInput } 
            value={ formData.vendor}
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
            id="vendorName"
            placeholder="Brand Name"
          />
        </div>

        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            Tracking Number
          </label>
          <input
            required
            type="number"
            name="trackingNumber"
            onChange = { handleInput } 
            value={ formData.trackingNumber }
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
            id="trackNumber"
            placeholder="123456"
          />
        </div>
      
        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            Invoice Number
          </label>
          <input
            required
            type="number"
            name="invoiceNumber"
            onChange = { handleInput } 
            value={ formData.invoiceNumber }
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
            id="invoiceNumber"
            placeholder="123456"/>
        </div>


        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            Packing Number
          </label>
          <input
            required
            type="number"
            name="packingNumber"
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
            id="packingNumber"
            placeholder="123456"
          />
        </div>
        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left" >
            On Site Contact Number
          </label>
          <input
            required
            type="number"
            name="contactNumber"
            onChange = { handleInput } 
            value={ formData.contactNumber}
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
            id="onSiteNumber"
            placeholder="Site's Phone Number"/>
        </div>
        <div className="box text-left text-xl">
          <label className="form-label inline-block mb-2 text-gray-700 text-left">
            On Duty Form Filler
          </label>
          <input
            required
            maxLength="12"
            type="text"
            name="formFiller"
            onChange = { handleInput } 
            value={ formData.formFiller }
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
            id="formFiller"
            placeholder="Uploader Name"/>
        </div>
        <div className="box text-left text-xl mb-14 ">
          <label
            className="form-label inline-block mb-2 text-gray-700 text-left">
            Load or Unload
          </label>
          <Select name="status" onChange={(selectedStatus) =>   
            {setForm({...formData,status: selectedStatus.value})}} defaultValue={formData.statusS} options={
          [
          {value: 'WL', label: 'Load'},
          {value: 'WU', label: 'Unload'}
          ]} />
          
        </div>

        </div>
        <div className="mt-0">
          <button className="px-6 py-2 row-span-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 mb-10">
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;


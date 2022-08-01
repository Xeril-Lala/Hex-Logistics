const Form = () => {



    return (
        <div className = "bg-white h-screen  m-11 container w-full grid place-items-center">
            <h1 className = "text-xl font-md mt-12 p-12 text-left "> Shipping Form 
                <div className = "grid grid-cols-2 gap-5  place-items-center text-gray-700 align-middle text-left">
                    <div className = "border-b-1 border-blue-400 m-6">
                        <a>Internal Packing Number</a><br/>
                        <input type="text" placeholder = "#12345678"></input>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Delivery Location</a><br/>
                        <input type="text" placeholder = "Tijuana B.C. Samil"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Purchase Date</a><br/>
                        <input type="text" placeholder = "Oct-20-2022"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Arrival Date</a><br/>
                        <input type="text" placeholder = "Jan-10-2023"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Vendor</a><br/>
                        <input type="text" placeholder = "Smurfit Kappa"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Vendor No.Invoice</a><br/>
                        <input type="text" placeholder = "#1234567"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Tracking Number</a><br/>
                        <input type="text" placeholder = "#12345678910"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Order Number</a><br/>
                        <input type="text" placeholder = "#12345"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>On Site Contact Number</a><br/>
                        <input type="text" placeholder = "+52 (664) 123-4566"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6">
                        <a>Form Submitter</a><br/>
                        <input type="text" placeholder = "Frank Mason"/>
                    </div>
                </div>  
                </h1> 
                
        </div>
    );
}

export default Form;

import './Form.css'


const Form = () => {



    return (
        <div className = "bg-zinc-800 h-screen w-11/12 m-11">
            <h1 className = "text-2xl font-semibold m-12 p-12 text-left"> Shipping Form </h1>
                <div className = "grid grid-cols-2 gap-5 container place-items-center text-white align-middle text-left">
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Internal Packing Number</a><br/>
                        <input type="text" placeholder = "#12345678"></input>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Delivery Location</a><br/>
                        <input type="text" placeholder = "Tijuana B.C. Samil"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Purchase Date</a><br/>
                        <input type="text" placeholder = "Oct-20-2022"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Arrival Date</a><br/>
                        <input type="text" placeholder = "Jan-10-2023"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Vendor</a><br/>
                        <input type="text" placeholder = "Smurfit Kappa"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Vendor No.Invoice</a><br/>
                        <input type="text" placeholder = "#1234567"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Tracking Number</a><br/>
                        <input type="text" placeholder = "#12345678910"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Order Number</a><br/>
                        <input type="text" placeholder = "#12345"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>On Site Contact Number</a><br/>
                        <input type="text" placeholder = "+52 (664) 123-4566"/>
                    </div>
                    <div className = "border-b-2 border-blue-400 m-6 w-2/4">
                        <a>Form Submitter</a><br/>
                        <input type="text" placeholder = "Frank Mason"/>
                    </div>
                </div>   
        </div>
    );
}

export default Form;

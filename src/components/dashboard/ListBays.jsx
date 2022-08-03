import React, { Fragment } from "react";
import Bay from "./Bay";

const ListBays = ({bays}) => {
    return ( 
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-10 xl:mx-40 mx-4 my-10">
            {bays.map(bay=>(
                <Bay 
                    key = {bay.id}
                    bay = {bay}
                />
            ))}
        </div>
     );
}
 
export default ListBays

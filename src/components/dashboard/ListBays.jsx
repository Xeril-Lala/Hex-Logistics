import Bay from "./Bay";

const ListBays = ({bays}) => {
    return ( 
        <div className="grid grid-cols-6  gap-10  mx-40 my-10">
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

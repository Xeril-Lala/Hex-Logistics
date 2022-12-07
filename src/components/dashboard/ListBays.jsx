import Bay from "./bay/Bay";

const ListBays = ({bays}) => {
    return ( 
        <div className="grid grid-cols-5  gap-10  mx-40 my-10">
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

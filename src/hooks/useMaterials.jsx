import { useEffect,useState } from "react";
import { getMaterialsData } from "../services/baysData";


export const useMaterials = () => {
    const [loadingMaterials,setLoadingMaterials] = useState(true);
    const [materials,setMaterials] = useState([]);

    const loadMaterials = async () =>{
        try{
            setLoadingMaterials(true);
            const result = await getMaterialsData();
            setMaterials(result.materials)
        }catch(error) {console.log(error)}
        setLoadingMaterials(false);
    }

    useEffect(()=>{
        loadMaterials();
    },[]);
    
    return {
        materials,
        loadingMaterials
    };
}
 
export default useMaterials;
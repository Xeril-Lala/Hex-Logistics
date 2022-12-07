import { getHistoric } from "../services/historic.js";
import { useEffect,useState } from "react";


export const useHistoric = () => {
    const [loadingLogs,setLoadingLogs] = useState(true);
    const [logs,setLogs] = useState([]);

    const loadLogs = async () =>{
        try{
            setLoadingLogs(true);
            const result = await getHistoric();
            setLogs(result.logs)
        }catch(error) {console.log(error)}
        setLoadingLogs(false);
    }

    useEffect(()=>{
        loadLogs();
    },[]);
    
    return {
        logs,
        loadingLogs
    };
}
 
export default useHistoric;
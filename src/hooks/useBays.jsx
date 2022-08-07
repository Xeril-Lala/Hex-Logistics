import { getBaysData } from "../services/baysData";

export const useBays = (setBays) => {
    const loadBays = async () =>{
        try{
            const result = await getBaysData();
            // console.log(result.details);
            setBays(result.details);
        } catch(error) { console.log(error);}
    }

    return { loadBays }
  }
  
  export default useBays;
  
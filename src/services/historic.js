import { API_URL } from "./settings";


export const getHistoric = async ()=>{
    const url = `${API_URL}/api/bays/logs`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}
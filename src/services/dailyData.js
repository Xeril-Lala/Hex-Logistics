import { API_URL } from "./settings";

export const  getDailyData = async () => {
    var url = `${API_URL}/api/daily-stat`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}
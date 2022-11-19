import { API_URL } from "./settings";

export const getWeeklyData = async () => {
    var url = `${API_URL}/api/weekly-stat`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}
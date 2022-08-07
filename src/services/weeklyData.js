import { API_URL } from "./settings";

export const getWeeklyData = () => {
    var url = `${API_URL}/api/weekly-stat`;
    return fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}
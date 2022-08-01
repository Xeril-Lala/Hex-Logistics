import { API_URL } from "./settings";

export const getDailyData = () => {
    var url = `${API_URL}/api/daily-stat`;
    return fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}
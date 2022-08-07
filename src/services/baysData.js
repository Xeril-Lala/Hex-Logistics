import { API_URL } from "./settings";

export const getBaysData = async () => {
    var url = `${API_URL}/api/bays`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}
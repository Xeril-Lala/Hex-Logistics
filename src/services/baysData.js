import { API_URL } from "./settings";

export const getBaysData = async () => {
    var url = `${API_URL}/api/bays`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}

export const getBay = async (id)=>{
    var url = `${API_URL}/api/bays/${id}`;
    return await fetch(url)
    .then((response)=>response.json())
    .catch((error)=>{console.log(error);} )
}

export const updateBay = async (id, updatedBay) =>{
    var url = `${API_URL}/api/bays/${id}`;
    return await fetch(url,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "guideNumber": parseInt(updatedBay.guideNumber),
            "materialId": parseInt(updatedBay.materialId),
            "personal": parseInt(updatedBay.personal),
        })
    })  
}
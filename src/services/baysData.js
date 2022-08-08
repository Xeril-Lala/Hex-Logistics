import { API_URL } from "./settings";

export const getBaysData = async () => {
    var url = `${API_URL}/api/bays`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}

export const postForm = async () => {
    var url = `${API_URL}/api/bays/waiting/`;
    return await fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}

export const postFormData = async ({postForm}) => {
    var url = `${API_URL}/api/`;
    return await fetch (url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({username,password})
        body: JSON.stringify({
            "materialType": String(postForm.materialType),
            "password": String(password)
        })
    }).then(response=>{
        if(!response.ok) throw new Error('Error in response')
        return response.json()
    }).then(response=>{
        const  {token} = response
        return token
    })
}
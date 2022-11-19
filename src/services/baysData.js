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

export const postFormData = async (postForm) => {
    const parsedData = JSON.stringify({
        "materialId": parseInt(postForm.materialId),
        "statusId": String(postForm.statusId),
        "purchasedDate": String(postForm.purchasedDate),
        "estimatedDate": String(postForm.estimatedDate),
        "deliveryAddress": String(postForm.deliveryAddress),
        "vendor": String(postForm.vendor),
        "trackingNumber": Number(postForm.trackingNumber),
        "invoiceNumber": String(postForm.invoiceNumber),
        "contactNumber": String(postForm.contactNumber),
        "formFiller": String(postForm.formFiller), 
    });
    var url = `${API_URL}/api/bays/queue`;
    return await fetch (url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: parsedData

    }).then(response=>{
        if(!response.ok) throw new Error('Error in response')
        return response.json()
    }).then(response=>{
        const  {token} = response
        return token
    }).catch(error=>{
        console.log(error);
        console.log(postForm)
    });
}
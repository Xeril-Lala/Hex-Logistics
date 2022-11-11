import { API_URL } from "./settings";

 export const login = async ({username, password}) => {
    var url = `${API_URL}/api/accounts/login`;
    return await fetch (url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({username,password})
        body: JSON.stringify({
            "email": String(username),
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

export default login;
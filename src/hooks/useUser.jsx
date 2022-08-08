import { useState } from "react";
import { useContext, useCallback } from "react";
import Context from '../context/UserContext'
import loginService from '../services/login'

export const useUser = () => {
    const {jwt, setJWT,admin,setAdmin} = useContext(Context)
    const [loading, setLoading] = useState(false);

    const login = useCallback(({username, password})=>{
        setLoading(true)
        loginService({username,password})
        .then(jwt=>{
            //Get claim roles
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const adminRol = JSON.parse(window.atob(base64))["adminRol"];
            window.localStorage.setItem('jwt', jwt)
            setLoading(false)
            console.log(jwt)
            if(adminRol !== undefined){
                window.localStorage.setItem('admin',JSON.parse(window.atob(base64))["adminRol"])
                setAdmin(adminRol)
            } else {setAdmin(null)}
            setJWT(jwt)
        })
        .catch(error=>{
            window.localStorage.removeItem('jwt', jwt)
            setLoading(false)
            console.log(error)
        })
    },[setJWT,setAdmin])

    const logout = useCallback(()=>{
        
        window.localStorage.removeItem('jwt', jwt)
        setJWT(null)

        window.localStorage.removeItem('admin', admin)
        setAdmin(null)
    },[setJWT,setAdmin])

    return {
        isLogged: Boolean(jwt),
        isAdmin: Boolean(admin),
        isLoginLoading: loading,
        login,
        logout
    }
  }
  
  export default useUser;
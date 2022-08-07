import { useState } from "react";
import { useContext, useCallback } from "react";
import Context from '../context/UserContext'
import loginService from '../services/login'

export const useUser = () => {
    const {jwt, setJWT} = useContext(Context)
    const [loading, setLoading] = useState(false);

    const login = useCallback(({username, password})=>{
        setLoading(true)
        loginService({username,password})
        .then(jwt=>{
            window.localStorage.setItem('jwt', jwt)
            setLoading(false)
            console.log(jwt)
            setJWT(jwt)
        })
        .catch(error=>{
            window.localStorage.removeItem('jwt', jwt)
            setLoading(false)
            console.log(error)
        })
    },[setJWT])

    const logout = useCallback(()=>{
        window.localStorage.removeItem('jwt', jwt)
        setJWT(null)
    },[setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: loading,
        login,
        logout
    }
  }
  
  export default useUser;
  
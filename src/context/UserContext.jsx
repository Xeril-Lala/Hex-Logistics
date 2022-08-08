import React, {useState} from 'react'

const Context = React.createContext({})

export const UserContextProvider = ({children}) => {

    const [jwt, setJWT] = useState(
        ()=> window.localStorage.getItem('jwt'))

    const [admin,setAdmin] = useState(
        ()=> window.localStorage.getItem('admin')
    )

    return <Context.Provider value={{jwt, setJWT,admin,setAdmin}}>
        {children}
    </Context.Provider>
  }
  
  export default Context;
  
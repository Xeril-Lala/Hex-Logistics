import React, {useState} from 'react'

const Context = React.createContext({})

export const UserContextProvider = ({children}) => {

    const [jwt, setJWT] = useState(
        ()=> window.localStorage.getItem('jwt'))

    return <Context.Provider value={{jwt, setJWT}}>
        {children}
    </Context.Provider>
  }
  
  export default Context;
  
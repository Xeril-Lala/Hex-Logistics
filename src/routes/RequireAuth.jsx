import {Navigate, useLocation } from 'react-router-dom'
import useUser from '../hooks/useUser';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const {isLogged} = useUser()
    
    if (!isLogged){
        return <Navigate to='/login' state={{path: location.pathname}} />
    }

    return children
}
 
export default RequireAuth;
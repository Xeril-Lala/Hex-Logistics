import {Navigate, useLocation } from 'react-router-dom'
import useUser from '../hooks/useUser';

const RequireAdmin = ({children}) => {
    const location = useLocation()
    const {isAdmin} = useUser()
    
    if (!isAdmin){
        return <Navigate to='/Form' state={{path: location.pathname}} />
    }

    return children
}
 
export default RequireAdmin;
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'

const PrivateRoute = () => {
const {isLogged} = useUser()
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute

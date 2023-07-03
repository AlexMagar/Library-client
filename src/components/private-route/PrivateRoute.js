import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    
    const {user} = useSelector((state) => state.userInfo);
    
    //if there is a user go to selected path else goto main/home 
    return user?._id ? children : <Navigate to="/" />
}

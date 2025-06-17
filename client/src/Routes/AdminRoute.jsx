import React, { useEffect } from 'react'
import { usestore } from '../Store/ContextStore'
import { Outlet, useNavigate } from 'react-router'

export const AdminRoute = () => {
    const {AdminKey,user,jwtToken}=usestore()
    const navigate=useNavigate()
    useEffect(()=>{
        if(user.role!=='Admin'){
            navigate('/job-portal')
            
        }
    },[user,jwtToken])

    return(
        <>
        <Outlet/>
        </>
    )
 
}


export default AdminRoute

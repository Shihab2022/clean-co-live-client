import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';

const AdminRoute = () => {
    const location =useLocation()
    const [admin]=UseAdmin()
    
    if(!admin){
        return <Navigate to='/login' state={{from :location}} replace></Navigate>
    }
    return <Outlet/>
};

export default AdminRoute;
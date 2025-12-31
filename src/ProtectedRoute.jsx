import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function ProtectedRoute() {

    let condition=false;
  return condition?<Outlet/>:<Navigate to="/"/>
}

export default ProtectedRoute
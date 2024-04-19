import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Usercontext from './Usercontext';


const ProtectedRoutes = ({ children }) => {
 const { user } = useContext(Usercontext);

 if (!user) {
    return <Navigate to="/" replace />;
 }

 return <div>{children}</div>;
};

export default ProtectedRoutes;
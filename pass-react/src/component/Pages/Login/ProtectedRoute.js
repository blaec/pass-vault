import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = (params) => {
    const {user, redirectPath = '/login', children} = params;
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
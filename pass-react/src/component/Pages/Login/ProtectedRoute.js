import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import {useLocation} from "react-router";

const ProtectedRoute = (params) => {
    const {redirectPath = '/login', children} = params;
    const {token} = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to={redirectPath} replace state={{ from: location }} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useLocation} from "react-router";

import useAuth from "../../../hooks/use-auth";
import {reactLinks} from "../../../utils/UrlUtils";


const ProtectedRoute = (params) => {
    const {redirectPath = reactLinks.login, children} = params;
    const {token} = useAuth();
    const location = useLocation();

    if (!token) {
        return (
            <Navigate
                to={redirectPath}
                replace
                state={{from: location}}
            />
        );
    }


    return children || <Outlet/>;
};

export default ProtectedRoute;
import React from 'react';

import AuthContext from "../contexts/AuthContext";


const useAuth = () => {
    return React.useContext(AuthContext);
};

export default useAuth;
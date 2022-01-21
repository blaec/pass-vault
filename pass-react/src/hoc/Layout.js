import React from 'react';

import MyToolbar from "../component/Toolbar/MyToolbar";

const Layout = (props) => {
    const {children} = props;

    return (
        <div>
            <MyToolbar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
import React from 'react';
import Navber from '../../../component/Navber/Navber';
import { Outlet } from 'react-router';
import Bannar from '../../../component/Bannar/Bannar';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Bannar></Bannar>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Root;
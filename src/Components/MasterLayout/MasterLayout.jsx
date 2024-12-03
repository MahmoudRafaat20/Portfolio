import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
    return (
        <div className='d-flex'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MasterLayout;
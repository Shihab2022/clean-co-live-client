import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideBar from './DashboardSideBar';

const Dashboard = () => {
    return (
<DashboardSideBar>
    <Outlet/>
</DashboardSideBar>
    );
};

export default Dashboard;
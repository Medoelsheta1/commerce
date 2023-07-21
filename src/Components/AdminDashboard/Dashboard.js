import React from 'react'
import DashboardList from './DashboardList'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <>
            <DashboardList />
            <div className='dashboard-content col-8'>
                <Outlet />
                </div>

        </>
        
    )
}

export default Dashboard
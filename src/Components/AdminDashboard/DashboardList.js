import React from 'react'
import { RiAdminFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DashboardList = () => {
    return (
    <div className='dashboard-list  col-lg-3 col-sm-4 col-4'>
        <div className='dashboard-logo bg-primary d-flex flex-column justify-content-center align-items-center'>
            <div className='dashboard-icon'>
                <RiAdminFill className='text-primary' />
            </div>
            
            <p className='text-center mt-3 h4 text-white'>Settings</p>
        </div>
        <ul className='dashboard-list ps-0'>
            <li className='p-4 ps-3 h5'><Link to='home'>Home</Link></li>
            <li className='p-4 ps-3 h5'><Link to='products'>View Products</Link></li>
            <li className='p-4 ps-3 h5'><Link to='addProducts'>Add Product</Link></li>
        </ul>
    </div>
    )
}

export default DashboardList
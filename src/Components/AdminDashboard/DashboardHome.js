import React from 'react'
import {AiFillDollarCircle} from 'react-icons/ai'
// import {FaCartShopping} from 'react-icons/fa'
import {BsFillCartCheckFill , BsCart4} from 'react-icons/bs'
import useFetch from '../hooks/useFetch'


const DashboardHome = () => {
        const {data} = useFetch('orders')
        console.log(data)    
        let ProductNumber = 0   
        let price = 0
    if(data) {
        data.forEach((ele) => {
            
            ProductNumber += ele.attributes.products.length
            ele.attributes.products.forEach((elemnt) => {
                price += elemnt.attributes.price
            })
        })
    }

    return (
        <div className='dashboard-home p-2'>
            <h2>Admin Home</h2>
            <div className='row dash-home-content mt-3'>
                <div className='row flex-wrap gap-5'>
                    <div className='col-3 dash-box p-2'>
                        <p className='h4'>Earning</p>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <span className='h5'>${price}</span>
                            <AiFillDollarCircle className='h3 dash-icon1'/>
                        </div>
                    </div>
                    <div className='col-3 dash-box p-2'>
                        <p className='h4'>Products</p>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <span className='h5'>{ProductNumber}</span>
                            <BsCart4 className='h3 dash-icon2'/>
                        </div>
                    </div>
                    <div className='col-3 dash-box p-2'>
                        <p className='h4'>Orders</p>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <span className='h5'>{data.length}</span>
                            <BsFillCartCheckFill className='h3 dash-icon3'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vertical rounded">
                <h2 className='mb-4'>Vertical, Rounded</h2>
                <div className="progress-bar">
                    <div className="progress-track">
                    <div className="progress-fill">
                        
                    </div>
                    </div>
                    <p className='h6'>Orders</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-track">
                    <div className="progress-fill">
                        
                    </div>
                    </div>
                    <p className='h6'>Processing</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-track">
                    <div className="progress-fill">
                    
                    </div>
                    </div>
                    <p className='h6'>Shipped</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-track">
                    <div className="progress-fill">
                        
                    </div>
                    </div>
                    <p className='h6'>Dellivered</p>
                </div>  
                
            </div>

        </div>
    )
}

export default DashboardHome
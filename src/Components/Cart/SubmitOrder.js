import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Reset } from '../RTK/Slices/CartSlice'
const SubmitOrder = (props) => {
    const dispatch = useDispatch()
        const products = useSelector(state => state.cart.items)
        const [confirmOrders , setConfirmOrders] = useState(false)

        
    return (
    
            <div className='checkout-msg'>
                {confirmOrders ? 
                <div>
                    <p className='text-primary bold'>Successfully Sent your Orders we will message u soon</p> 
                    <button className='btn btn-primary order-button' onClick={()=> props.setExit(false)}>Close</button>
                </div>
                : 
                <>
                <h3 className='ms-2'>Your Receipt</h3>
                {products.map((ele)=>{
                    return (
                        <div className='product d-flex justify-content-between align-items-center' key={ele?.name}>
                            <p className='m-3'>{ele?.name}</p>
                            <span className=''>{ele?.price ? ele?.price?.value : ele?.whitePrice?.price}</span>  
                        </div>                              
                    )
                })}
                <div className='order-price d-flex justify-content-between align-items-center'>
                    <p className='m-3 text-danger'>Total Price</p>
                    <span className='text-danger'>{props.totalPrice}$</span>
                </div>
            <div className='checkout-buttons d-flex '>
                        <button  onClick={()=> setConfirmOrders(true) + dispatch(Reset()) } className='btn btn-danger  ' >Confirm</button>
                    </div>   
</>}    
        </div>
        
        
    )
}

export default SubmitOrder
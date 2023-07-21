import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import SubmitOrder from '../Cart/SubmitOrder'
import { ToastContainer, toast } from 'react-toastify'
const CheckoutForm = (props) => {
    const locationRef = useRef()
    const postCodeRef = useRef()
    const products = useSelector(state => state.cart.items)
    const [orderIsDone , setOrderIsDone] = useState(false)

    const formHandler = async (e) => {
        e.preventDefault()
        try {
            toast.info('Sending your order')
            await axios.post('https://strapi-nbja.onrender.com/api/orders' , {
                "data": {
                    name: props.user.username,
                    email: props.user.email,
                    products: products,
                    location: locationRef.current.value,
                    postCode: postCodeRef.current.value                    
                } 
        })
                setOrderIsDone(true)
                toast.success('Succcessfully sent your order')
            
        }catch(err) {
            console.log(err)
            toast.error('Somthing went wrong please try again')
        }

    }
    return (
        <>

        {
            orderIsDone ? 
                <SubmitOrder totalPrice={props.totalPrice} setExit={props.setExit} />
            : 
            <>
            
            <form className='checkout-form' onSubmit={formHandler}>
                <h1 className='mb-3'>CheckoutForm</h1>
                <label className='mb-3 h5'>Your Name</label>
                <input className='w-100 p-2 mb-4' type='text' disabled={true} value={props.user.username ? props.user.username : ''} />
                <label className='mb-3 h5'>Your Email</label>
                <input className='w-100 p-2 mb-4' type='email' disabled={true}  value={props.user.email ? props.user.email : ''} />
                <label className='mb-3 h5'>Your postCode</label>
                <input ref={postCodeRef} className='w-100 p-2 mb-4' type='number' required  />
                <label className='mb-3 h5'>Your Location</label>
                <textarea ref={locationRef} className='w-100 p-4 mb-4' type='text' placeholder='Your Location' required ></textarea>
                <div className='checkout-buttons d-flex '>
                    <button type='submit' className='btn btn-danger  '>Send Order</button>
                    <button onClick={() => props.setExit(false)}  className='btn btn-danger  me-3'>Close</button>
                </div>
            </form>   
            <ToastContainer
                position="top-left"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                /> 
                </>        
        }

        
        </>
    )
}

export default CheckoutForm
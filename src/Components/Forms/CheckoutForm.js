import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import SubmitOrder from '../Cart/SubmitOrder'
import { ToastContainer, toast } from 'react-toastify'
const CheckoutForm = (props) => {
    const locationRef = useRef()
    const postCodeRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const products = useSelector(state => state.cart.items)
    const [orderIsDone , setOrderIsDone] = useState(false)
console.log(products)
    const formHandler = async (e) => {
        e.preventDefault()
        
        try {
            toast.info('Sending your order')
            fetch("https://foodorder-278d4-default-rtdb.firebaseio.com/orders.json" , {
                method: "POST",
                body: JSON.stringify({
                    information: {
                        name: nameRef,
                        street: locationRef,
                        postcode: postCodeRef,
                        city: emailRef
                    },
                    
            })})
            
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
                <input ref={nameRef} className='w-100 p-2 mb-4' type='text' />
                <label className='mb-3 h5'>Your Email</label>
                <input ref={emailRef} className='w-100 p-2 mb-4' type='email'  />
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
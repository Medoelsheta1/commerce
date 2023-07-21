import React, { useState } from 'react'
import {MdDelete} from 'react-icons/md'
import { useSelector , useDispatch } from 'react-redux'
import { Add , Remove , Delete , Reset } from '../RTK/Slices/CartSlice'
// import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutForm from '../Forms/CheckoutForm';

const Cart = (props) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.items)
    const isLogin = useSelector(state => state.cart.isLogin)
    const userData = useSelector(state => state.cart.userData)
    const [payNow , setPayNow] = useState(false)
    const totalPrice = () => {
        let total = 0
        products.forEach(e => {
            total += e.attributes.price * e.amount
        });;
        return total.toFixed(2);
    }
    const paymentHandler = () => {
        if (!isLogin) {
            toast.error('You must login first')
            setPayNow(false)
        }else {
            if(products.length > 0) {
                setPayNow(true)
            }else {
                toast.error('Your Cart is empty')
            }
            
        }
    }
    
    return (
        <div className={`cart position-absolute ${props.class} `}>
            <button className='exit btn btn-primary d-block ms-auto' onClick={() => props.setViewCart(false)} >x</button>
            <h2 className='mt-3 mb-3'>Cart</h2>
            {products.length > 0 ?  
                products.map((item) => {
                    return (
                        <div key={item.id} className='cart-content d-flex gap-10 align-items-start'>
                            <img className='productImageCart' src={`${item?.attributes?.img1?.data?.attributes?.url}`} alt='productImageCart'/>
                            <div className='cart-text p-1  '>
                                <h5 className='fs-6  '>{item.attributes.title}</h5>
                                <p>{item.attributes.description}</p>
                                    <div className='d-flex justify-content-around align-items-center text-primary '>
                                        <button className=' btn btn-primary text-white' onClick={() => dispatch(Remove(item)) && toast.success('Removing Item successfully')}>-</button>
                                        <div>
                                            <span>{item.amount}&nbsp;&nbsp;</span><span>x&nbsp;&nbsp;</span><span>$&nbsp;{item.attributes.price}</span>
                                        </div>
                                        <button className='btn btn-primary text-white' onClick={() => dispatch(Add({...item , quantaty: 1})) && toast.success('adding Item successfully')} >+</button>
                                    </div>
                            </div>
                            <MdDelete onClick={() => dispatch(Delete(item)) && toast.success('Deletting Items successfully')} className=' c-pointer text-danger fs-4  ' />
                        </div>                          
                    )
                })

            : <p>No Items Found</p>}
            
            
                <div className='totalPrice d-flex pt-2'>
                    <h4>SubTotal:&nbsp; &nbsp;</h4>
                    <p className='fs-5 text-primary'>{totalPrice()}</p>
                </div>  
            <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-primary  ' onClick={paymentHandler}>PROCEED TO CHECKOUT</button>
                
                <span className='c-pointer' onClick={() => dispatch(Reset())}>Reset Cart</span>                
            </div>
            {isLogin && payNow &&  <CheckoutForm user={userData} setExit={setPayNow} totalPrice={totalPrice()} /> }
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
        </div>
    )
}

export default Cart
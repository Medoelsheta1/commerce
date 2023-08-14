import React, { useState } from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add } from '../RTK/Slices/CartSlice'
import { ToastContainer , toast } from 'react-toastify'


const ProductDetailsCombonent = ({item }) => {
    const [quantaty , setQuantaty] = useState(1)
    const dispatch = useDispatch()
    console.log(item)
    const addToCartHandler = () => {
        dispatch(Add({...item , amount: quantaty , quantaty: quantaty }))
        toast.success('Adding Items successfully')
    }
    return (
        <>
            <div className='right col-lg-6 col-12'>
                <div className='details'>
                    <h2 className='mb-3'>{item?.name}</h2>
                    <span className='productPrice text-primary fs-2 d-block  mb-3'>{item?.whitePrice.price}$</span>
                    <h3>Description</h3>
                    <p>{item?.description}</p>
                </div>
                <div className='controlButtons mb-4'>
                    <button className='btn btn-outline-secondary' onClick={() => setQuantaty(quantaty === 1 ? 1 : quantaty - 1)}>-</button>
                    <span className='p-3'>{quantaty}</span>
                    <button className='btn btn-outline-secondary' onClick={() => setQuantaty(quantaty + 1)}>+</button>
                </div>
                <button onClick={addToCartHandler} className='btn btn-primary mb-3 btn-lg '><MdAddShoppingCart className='me-2 fs-4'  />Add to CART</button>
                
                <div className='mb-3'><Link className='fs-5 '><AiOutlineHeart className='me-2' />Add to wishlist</Link></div>
                <hr />
                <div className=' headersDescription text-secondary'>
                    <h5>Description</h5>
                    <h5>ADDITIONAL INFORMATION</h5>
                    <h5>FAQ</h5>                    
                </div>
            </div>
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
    )
}

export default ProductDetailsCombonent
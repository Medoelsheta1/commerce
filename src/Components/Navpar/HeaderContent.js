import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import {FaCartArrowDown} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useSelector , useDispatch } from 'react-redux'
import { LogOut } from '../RTK/Slices/CartSlice'
const HeaderContent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [viewCart , setViewCart] = useState(false)
    const products = useSelector(state => state.cart.items)
    const isLogin = useSelector(state => state.cart.isLogin)
    const totalPrice = () => {
        let total = 0
        products.forEach(e => {
            total += e?.price?.value * e.amount
        });;
        return total.toFixed();
    }
    const searchInputHandler = (e) => {
        navigate(`/store/search/${e.target.value}`)
        
    }
    return (
        <>
        <div className='container pt-3'>
            <div className='row'>
                <div className=' header-title col-lg-4 col-md-4  col-xl-2 col-4 text-center'>
                    <h2 className='text-white'><Link to='/'>Store</Link></h2>
                </div>
                <div  className=' header-search col-lg-7 col-md-7 col-7 col-xl-4 text-start position-relative '>
                    <input className='p-3 w-100' placeholder='Search Product Here' name='search' type='text' onChange={searchInputHandler} />
                    <div className='rounded-start position-absolute end-0 top-0 p-2 ps-3 pe-3 bg-warning h-100 d-flex justify-content-center align-items-center rounded '>
                        <AiOutlineSearch  className='text-black fs-3 fw-bold  '/>
                    </div>
                </div>
                <div style={{cursor: 'pointer'}} className=' header-upper-links col-lg-12 col-md-12 col-xl-5  d-flex justify-content-around align-items-center'>
                        {isLogin ?  
                            <>
                                <div className='d-flex flex-row justify-content-start align-items-center '>
                                    <BsPerson className='text-white fs-1 fw-bold me-2'   />
                                    <h3 className='text-white text-center mt-1'>
                                        <Link to='/profile' className='text-white'>Profile</Link>
                                    </h3>
                                </div>
                                <div className='d-flex flex-row justify-content-start align-items-center ' onClick={() =>dispatch(LogOut()) }>
                                    <BiLogOut className='text-white fs-1 fw-bold me-2'   />
                                    <h3 className='text-white text-center mt-1'>
                                        Logout
                                    </h3>
                                </div>
                            </>
                                :
                            <div className='d-flex flex-row justify-content-start align-items-center '>
                                <BsPerson className='text-white fs-1 fw-bold me-2'   />
                                
                                <h5 className='text-white'><Link to='/login' className='text-white'>Login<br/> MyAccount</Link></h5>                        
                            </div>                            
                        }
                        <div className='d-flex flex-row  align-items-center gap-10 text-white  ' onClick={() => setViewCart(!viewCart)} style={{cursor: 'pointer'}}>
                            <FaCartArrowDown className='text-white fs-1 fw-bold me-2'   />
                            <div className=' cart-price d-flex flex-column flex-end '>
                                <span className='bg-white text-black text-center fw-bold rounded '>{products.length}</span>   
                                <p className='m-0'>{totalPrice()}$</p>
                            </div>                        
                        </div>
                </div>
            </div>
        </div>  
        <Cart class={viewCart ? 'viewCart' : null} setViewCart={setViewCart}  />     
        </>

    )
}

export default HeaderContent
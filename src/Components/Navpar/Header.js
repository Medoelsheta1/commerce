import React from 'react'
import HeaderContent from './HeaderContent'
import Navpar from './Navpar'
const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container pt-3'>
                    <div className='row'>
                        <div className='col-7'>
                            <p className=' header-title text-start text-white'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className='col-5'>
                            <p  className='header-title text-end text-white'>Hotline: <a href="tel:+201021761272">+201021761272</a></p>
                        </div>
                    </div>
                </div>
                <hr className='text-white m-0'></hr>
                <HeaderContent />
                <Navpar />
            </header>        
        </>


    )
}

export default Header
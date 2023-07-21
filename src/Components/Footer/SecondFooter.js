import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsGooglePlay} from 'react-icons/bs'
import {AiFillApple ,AiOutlineTwitter , AiFillInstagram  ,AiFillYoutube} from 'react-icons/ai'
const SecondFooter = () => {
    return (
        <>
            <footer className='second-footer row text-white'>
                <div className='col-lg-2 col-sm-6 d-flex flex-column'>
                    <h2 className='mb-4'>Contact Us</h2>
                    <p>Demo Store</p>
                    <p>No. 212 elfoundoa , zefta , 1111 <br /> Egypt</p>
                    <p>+201021761272</p>
                    <p>elsheta474@gmail.com</p>
                    <ul className='social d-flex  align-items-center'>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <AiOutlineTwitter />
                        </li>
                        <li>
                            <AiFillInstagram />
                        </li>
                        <li>
                            <AiFillYoutube />
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h2 className='mb-4'>Information</h2>
                    <p>Privacy Police</p>
                    <p>Refund Police</p>
                    <p>Snipping Police</p>
                    <p>Terms Of service</p>
                    <p>Blogs</p>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h2 className='mb-4'>Account</h2>
                    <p>Search</p>
                    <p>About Us</p>
                    <p>faq</p>
                    <p>Contact</p>
                    <p>Size Chart</p>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h2 className='mb-4'>Quick Links</h2>
                    <p>Accessories</p>
                    <p>Laptops</p>
                    <p>Headphones</p>
                    <p>Smart Watches</p>
                    <p>Tablets</p>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <h2 className='mb-4'>Our App</h2>
                    <p>Dowenload our app and get extra 15% Discount on <br />
                    your first Order..!</p>
                    <div className='alt-social'>
                        <div className='bg-white'>
                            <BsGooglePlay />
                            <div>
                                <span>Get it on</span>
                                <h6>Google Play</h6>
                            </div>
                        </div>                        
                        <div className=''>
                            <AiFillApple />
                            <div>
                                <span>Dowenload on the</span>
                                <h6>App store</h6>
                            </div>
                        </div>                        
                    </div>

                </div>
                <hr className='text-white mt-5' />
            </footer>
            
        </>
    )
}

export default SecondFooter
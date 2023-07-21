import React from 'react'
import {GiArrowWings} from 'react-icons/gi'
import SecondFooter from './SecondFooter'
import ThidFooter from './ThidFooter'
export const Footer = () => {
    return (
        <>
            <footer className='first-footer '>
                <div className=' first-footer-conent container row ms-auto me-auto' >
                    <div className='text-white col-lg-4 col-sm-12 d-flex justify-content-center align-items-center gap-10'>
                        <GiArrowWings  />
                        <h4>sign up for newsletter</h4>
                    </div>
                    <div className='col-lg-8 col-sm-12'>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control p-3" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text text-white" id="basic-addon2">SUBSCRIBE</span>
                        </div>
                    </div>
                </div>
                <hr className='text-white' />
            </footer>
            <SecondFooter />
            <ThidFooter />
        </>
    )
}

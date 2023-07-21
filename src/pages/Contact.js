import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {RiMessage3Fill} from 'react-icons/ri'
const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='text-center'>Contact</h1>
            <div className='container'>
                <div className='contact-content'>
                    <div className='map col-12 pt-3'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.43499114424!2d30.958156825183075!3d30.793107018028287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95daafcf035%3A0x7421820c5e8cae42!2sTanta%2C%20Tanta%20Qism%202%2C%20Tanta%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1683591021388!5m2!1sen!2seg"
                        allowfullscreen=""
                        loading="lazy"
                        title='This is a unique title'
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact-wrabber row justify-content-between'>
                        <form className='contact-form p-4 col-md-6 col-12'>
                            <input className='w-100' type='text' placeholder='Your Name' name='user-name' required />
                            <input  className='w-100' type='email' placeholder='Email' name='user-email' required/>
                            <input  className='w-100' type='number' placeholder='Phone Number' name='phone' required/>
                            <textarea className='w-100 ' placeholder='Your Comment' name='msg'>

                            </textarea>
                            <button className='btn btn-dark'>Send</button>
                        </form>
                        <div className='col-md-5 col-12  contact-text mt-4 p-5 d-flex flex-column align-items-start justify-content-start'>
                            <h3>Get in touch With us</h3>
                            <div className='d-flex mt-4'>
                                <AiFillHome className='me-2 h5' />
                                <p>Zifta city , mohafzet elgharbia Egypt</p>
                            </div>
                            <div className='d-flex mt-4'>
                                <BsFillTelephoneFill className='me-2 h5' />
                                <p>(+20)1021761272</p>
                            </div>
                            <div className='d-flex mt-4'>
                                <RiMessage3Fill className='me-2 h5' />
                                <p>elsheta474@gmail.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
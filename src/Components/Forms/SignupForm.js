import React, { useState } from 'react'
import LayoutForm from './LayoutForm'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LogIn } from '../RTK/Slices/CartSlice'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../Loaders/Loader'
const SignupForm = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)
    const [err , setError] = useState(false)
    const {value: name , isValid: isNameValid ,
        isTouched: isNameTouched ,inputHandler: nameInputHandler 
        , blurInputHandler: nameBlurHandler } = useInput(value => value.trim() !== '')
    const {value: mail , isValid: isEmailValid ,
        isTouched: isEmailTouched ,inputHandler: emailInputHandler ,
        blurInputHandler: emailBlurHandler } = useInput(value => value.includes('@'))
    const {value: pass ,  isTouched: isPassTouched ,
        isValid: isPassValid , inputHandler: passInputHandler 
        , inputBlurHandler: passBlurHandler 
    } = useInput( value => value.trim() !== '')
    let formValidate = false 
    if (isEmailValid && isNameValid && isPassValid){
        formValidate = true
    }    
    const formHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!formValidate){
            setLoading(false)

            return;
        }

        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-1d12rA6rNwYiqjTXNB0RR7GB2V1RDW0' , {
                username: name,
                password: pass,
                email: mail,
                returnSecureToken: true
            })

            await dispatch(LogIn(res.idToken))   
            setLoading(false)
            toast.success('Sign up successfully')
            Navigate('/')          
            
        
        }catch(error) {
            setError(true)
            setLoading(false)
        }


    }
    return (
        <>
        <LayoutForm header='Signup'>
            <form className='w-100 p-4 text-white' onSubmit={formHandler}>
                <div  className='input w-100 mb-3'>
                    <label className='me-2 fs-5 mb-1' htmlFor='name' >User Name</label>
                    <input className={`p-3 rounded w-100 ${isNameTouched && !isNameValid && 'bg-danger'}`}  type='text' name='name' id='name'
                    onBlur={nameBlurHandler} onChange={nameInputHandler} value={name}  />
                    { isNameTouched && !isNameValid && <p className='text-danger mt-1'>Your name must cant be empty</p>}
                </div>
                <div  className='input w-100 mb-3'>
                    <label className='me-2 fs-5 mb-1' htmlFor='mail' >Email</label>
                    <input className={`p-3 rounded w-100 ${isEmailTouched && !isEmailValid && 'bg-danger'}`}  type='text' name='mail' id='mail'
                    onBlur={emailBlurHandler} onChange={emailInputHandler} value={mail}  />
                    { isEmailTouched && !isEmailValid && <p className='text-danger mt-1'>Your Email must be valid</p>}
                </div>

                <div className='input'> 
                    <label className='me-2 fs-5 mb-1' htmlFor='pass' >Password</label>
                    <input className={`p-3 rounded w-100 ${isPassTouched && !isPassValid && 'bg-danger'}`} type='password' name='pass' id='pass' 
                    onBlur={passBlurHandler} onChange={passInputHandler} value={pass}/>
                    { isPassTouched && !isPassValid && <p className='text-danger mt-1'>Your pass Cant be empty</p>}
                    {err && <p className='text-danger'>somthing went wrong please try again</p>}
                </div>
                <div className='buttons'>
                    <button className='btn btn-lg btn-primary d-block w-100 mt-3'>SignUp</button>
                    <Link to='/login' className='text-white'><button className='btn btn-lg btn-dark d-block w-100 mt-3'>Login</button></Link>
                </div>
            </form>
        </LayoutForm>  
        <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />   
        {loading && <Loader />}
        </>

    )
}

export default SignupForm
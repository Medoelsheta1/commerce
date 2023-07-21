import React from 'react'
import LayoutForm from './LayoutForm'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LogIn } from '../RTK/Slices/CartSlice'
const SignupForm = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
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
        if (!formValidate){
            return;
        }
        const res = await axios.post('https://strapi-nbja.onrender.com/api/auth/local/register' , {
            username: name,
            password: pass,
            email: mail
        })
        const token = await res.data.jwt;
        if (!res.ok){
            console.log('invalid data try again')
        }
        await dispatch(LogIn(token))
        Navigate('/')

    }
    return (
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
                </div>
                <div className='buttons'>
                    <button className='btn btn-lg btn-primary d-block w-100 mt-3'>SignUp</button>
                    <Link to='/login' className='text-white'><button className='btn btn-lg btn-dark d-block w-100 mt-3'>Login</button></Link>
                </div>
            </form>
        </LayoutForm>
    )
}

export default SignupForm
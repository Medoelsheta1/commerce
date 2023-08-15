
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput';
import LayoutForm from './LayoutForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LogIn  } from '../RTK/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import Loader from '../Loaders/Loader'
const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)
    const [faildLogin , setFaildLogin] = useState(false)
    const {value: name ,  isTouched: isNameTouched ,
        isValid: isNameValid  ,
        inputHandler: nameInputHandler , inputBlurHandler: nameBlurHandler 
    } = useInput( value => value.trim() !== '')

    const {value: pass ,  isTouched: isPassTouched ,
        isValid: isPassValid  ,
        inputHandler: passInputHandler , inputBlurHandler: passBlurHandler 
    } = useInput( value => value.trim() !== '')

    let formValidate = false
    if (isNameValid && isPassValid) {
        formValidate = true
    }
    
    const submitFormHandler = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (!formValidate) {
            setLoading(false)
            return;
        }
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-1d12rA6rNwYiqjTXNB0RR7GB2V1RDW0' , {
                email: name,
                password: pass,
                returnSecureToken: true
            })

            dispatch(LogIn(res.idToken))
            
            toast.success('Login successfully')
            navigate('/')               
            
        
        }catch(err) {
            setFaildLogin(true)
        }
        setLoading(false)
    }
    return (
        <>
        <LayoutForm header='Login' >
            <form className='form w-100 p-4 text-white' onSubmit={submitFormHandler}>
                <div  className='input w-100 mb-3'>
                    <label className='me-2 fs-5 mb-1' htmlFor='name' >Email</label>
                    <input className={`p-3 rounded w-100 ${isNameTouched && !isNameValid && 'bg-danger'}`}  type='text' name='name' id='name'
                    onBlur={nameBlurHandler} onChange={nameInputHandler} value={name}  />
                    { isNameTouched && !isNameValid && <p className='text-danger mt-1'>Your name Cant be empty</p>}
                </div>
                <div className='input'> 
                    <label className='me-2 fs-5 mb-1' htmlFor='pass' >Password</label>
                    <input className={`p-3 rounded w-100 ${isPassTouched && !isPassValid && 'bg-danger'}`} type='password' name='pass' id='pass' 
                    onBlur={passBlurHandler} onChange={passInputHandler} value={pass}/>
                    { isPassTouched && !isPassValid && <p className='text-danger mt-1'>Your pass Cant be empty</p>}
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    
                    <Link className=' forget text-white d-flex  mt-3'>Forget password?</Link>           
                </div>

                {faildLogin && <p className='text-danger'>Your userName or password is incorrect</p>}
                <div className='buttons'>
                    <button className='btn btn-lg btn-primary d-block w-100 mt-3'>Login</button>
                    <Link to='/signup' className='text-white'><button className='btn btn-lg btn-dark d-block w-100 mt-3'>SignUp</button></Link>
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

export default LoginForm
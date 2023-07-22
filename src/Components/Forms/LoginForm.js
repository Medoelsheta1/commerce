
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput';
import LayoutForm from './LayoutForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LogIn , AdduserData } from '../RTK/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
        
        e.preventDefault()
        if (!formValidate) {
            return;
        }
        try {
            const res = await axios.post('https://strapi-nbja.onrender.com/api/auth/local' , {
                identifier: name,
                password: pass,
            })
            await dispatch(LogIn(res.data.jwt))
            console.log(res)
            await dispatch(AdduserData(res.data.user))
            toast.success('Login successfully')
            navigate('/')            
        }catch(err) {
            setFaildLogin(true)
        }
    }
    return (
        <>
        <LayoutForm header='Login'>
            <form className='form w-100 p-4 text-white' onSubmit={submitFormHandler}>
                <div  className='input w-100 mb-3'>
                    <label className='me-2 fs-5 mb-1' htmlFor='name' >User Name</label>
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
                    <p>admin-login userName: admin , pass: admin4040</p>
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
        </>


    )
}

export default LoginForm
import React from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import {BiDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add } from '../RTK/Slices/CartSlice'
const Card = (props) => {
    const dispatch = useDispatch()
    const addItemHandler = () => {
        dispatch(Add({...props.item , amount: 1 , quantaty: 1}))
    }
    return (
        <>
        
        <div className={`card ${props.class} position-relative overflow-hidden`}>
            <img src={props?.item?.attributes?.img1?.data?.attributes?.url} alt='card_image' />
            <p className='pb-0 mb-1 pt-2 fw-bold text-danger'>{props.item.attributes.title}</p>
            <div className='icons  d-flex flex-column justify-content-around align-items-center position-absolute '>
                <Link className=' rounded-circle mb-3  text-white ' onClick={addItemHandler}>
                    <BsCartPlusFill className='fs-3   ' onClick={props.onClick} />
                </Link>
                <Link className=' rounded-circle  text-white ' to={`/productDetails/${props.item.id}`} >
                    <BiDetail className='fs-3     ' />
                </Link>
            </div>
            <span>{props.item.attributes.price}$</span>
            
        </div>
        
        </>
    )
}

export default Card
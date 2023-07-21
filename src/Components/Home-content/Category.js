import React from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
    return (
        <div className={`cat col-lg-4 col-md-4  col-sm-6 col-6  position-relative p-3 ${props.isBorderRight ? null : 'noBorderRight' }     `}>
            <Link to={props.to} className='d-flex justfy-content-between align-items-center text-black'>
                <h6 className=' centralized btn btn-primary position-absolute'>{props.title}</h6>  
                <img className='ms-3' src={props.imageSrc} alt='Category_image' />            
            </Link>
        </div>
    )
}

export default Category
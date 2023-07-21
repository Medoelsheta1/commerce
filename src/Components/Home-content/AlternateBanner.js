import React from 'react'

const AlternateBanner = (props) => {
    return (
        <div className='alternate-banner position-relative'>
            <img src={props.imageSrc} className='img-fluid  w-100  rounded' alt='alternate banner' /> 
            <div className='alternate-banner-content position-absolute'>
                <h5 className='text-danger'>{props.offer}</h5>
                <h4 className='fs-3'>{props.title}</h4>
                <p>{props.firstLine} <br/> {props.secondLine}</p>
            </div>
        </div>
    )
}

export default AlternateBanner
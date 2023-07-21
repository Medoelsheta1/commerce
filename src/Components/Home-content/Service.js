import React from 'react'
const Service = (props) => {
    return (
        <div className='service d-flex justify-content-end align-items-center p-10'>
            {props.icon}
            <div className='service-text ms-3'>
                <h4>{props.title}</h4>
                <p>{props.paragraf}</p>
            </div>
        </div>
    )
}

export default Service
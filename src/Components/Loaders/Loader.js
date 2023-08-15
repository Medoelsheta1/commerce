import React from 'react'
// import Svg from '/src/Components'
import {RiLoader4Fill} from 'react-icons/ri'
const loader = () => {
    return (
        <div className='loader'>
            <div className='loaderContent'>
                <RiLoader4Fill />
            </div>
            
        </div>
    )
}

export default loader
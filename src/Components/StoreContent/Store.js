import React from 'react'
import ProductsCategory from '../../pages/ProductsCategory'
import { Link, useParams } from 'react-router-dom'

const Store = () => {
    const params = useParams()
    const key = params.search
    return (
        <>
        <div className='catNav'>
            <ul className='storeCategories'>
                <Link to='/products/Men'>
                    <li>Men</li>
                </Link>
                <Link to='/products/Women'>
                    <li>Women</li>
                </Link>
                <Link to='/products/Kids'>
                    <li>Kids</li>
                </Link>
            </ul>            
        </div>

        <ProductsCategory Key={key} />
        </>
        
    )
}

export default Store
import React, { useState } from 'react'
import ProductDetailsCombonent from '../Components/StoreContent/ProductDetailsComponenet'
import useFetch from '../Components/hooks/useFetch'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
        const [image , setImage] = useState(0)
        const params = useParams()
        const {data , isLoading  } = useFetch(`products/detail` ,'' , params.id)
        console.log(data.product)
        
        
    return (
        <>
        { !isLoading ? 
        
        
        <div className='productDetails m-0 pb-5 pt-5 row gap-20'>
            <div className='left col-lg-6 col-12  row '>
                <div className='imagesContainer  col-2 d-flex flex-column '>
                    <img src={`${data?.product?.articlesList[0]?.galleryDetails[0]?.baseUrl}`} alt='product_Image1' onClick={() => setImage(0)} />
                    <img src={`${data?.product?.articlesList[0]?.galleryDetails[1]?.baseUrl}`} alt='product_Image2'onClick={() => setImage(1)} />
                </div>
                <div className='productImage col-10'>
                    <img src={`${data?.product?.articlesList[0]?.galleryDetails[image]?.baseUrl}`} alt='Product_Image' />
                </div>
            </div>
            <ProductDetailsCombonent item={data.product}   />
        </div>
        : 'Loading...'
        }
        </>
    )
}

export default ProductDetails
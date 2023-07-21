import React, { useState } from 'react'
import ProductDetailsCombonent from '../Components/StoreContent/ProductDetailsComponenet'
import useFetch from '../Components/hooks/useFetch'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
        const [image , setImage] = useState('img1')
        const params = useParams()
        const {data , isLoading  } = useFetch(`products?populate=*&[filters][id][$eq]=${params.id}`)
        
        
    return (
        <>
        {!isLoading && data.length > 0 ? 
        
        
        <div className='productDetails m-0 pb-5 pt-5 row gap-20'>
            <div className='left col-lg-6 col-12  row '>
                <div className='imagesContainer  col-2 d-flex flex-column '>
                    <img src={`${data[0]?.attributes?.img1?.data?.attributes?.url}`} alt='product_Image1' onClick={() => setImage('img1')} />
                    <img src={`${data[0]?.attributes?.img2?.data?.attributes?.url}`} alt='product_Image2'onClick={() => setImage('img2')} />
                </div>
                <div className='productImage col-10'>
                    <img src={`${data[0]?.attributes[image]?.data?.attributes?.url}`} alt='Product_Image' />
                </div>
            </div>
            <ProductDetailsCombonent item={data[0]}   />
        </div>
        : 'Loading...'
        }
        </>
    )
}

export default ProductDetails
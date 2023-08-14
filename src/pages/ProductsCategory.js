import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../Components/hooks/useFetch'
import CatList from '../Components/Cart/CatList'
const ProductsCategory = (props) => {
    const [selectedSubCategory , setSelectedSubCategory] = useState('')


    const params = useParams() //${params.category ?`?[filters][categories][title][$eq]=${params.category}` : ''}
    const {data , isLoading , err } = useFetch(`categories/list`)

    // if(params.category) {
    //     if(params.category === 'Men'){
    //         setSelectedSubCategory('men_all')
    //     }else if (params.category === 'Women') {
    //         setSelectedSubCategory('ladies_all')
    //     }else {
    //         setSelectedSubCategory('kids_newbornbaby_viewall')
    //     }        
    // }

    const searchKey = props.Key
    return (
            <div className='Products row p-0 m-0 pb-5  '>
                <div className='ProductsSettings col-3   text-start'>
                    <div className='filterItem'>
                        <h4 className='pb-2'>Products Category</h4>
                        {err && 'somthing went wrong'}
                        { isLoading ? 'Loading':  data.map((item) => {
                            return (
                                <div className='mb-2 sub-cat' key={item.CategoryValue}>
                                    <input name='cat' id={item.CategoryValue} type='radio' value={item.CatName} onClick={() => setSelectedSubCategory(item.tagCodes[0])} className='me-2' />
                                    <label htmlFor={item.CategoryValue}>{item.CatName}</label>                        
                                </div>                            
                            )
                        })}
                    </div>
                    <div className='filterItem'>
                        <h4 className='pt-5 pb-2'>Filter byy price</h4>
                        <span>0</span>
                        <input type='range' min='0' max='1000' step='10'  />
                        <span>{}</span> 
                    </div>
                    <div className='filterItem pt-4'>
                        <h4 className='pb-2'>Sort by</h4>
                        <div className='d-flex'>
                            <input className='me-2' type='radio' name='ass' id='asc' value='asc'  />
                            <label className='w-auto' htmlFor='asc'>Price (Lowest first)</label>                        
                        </div>
                        <div className='mt-2 d-flex'>
                            <input className='me-2' type='radio' name='ass' id='desc' value='desc' />
                            <label className='w-auto' htmlFor='desc'>Price (Highest first)</label>                        
                        </div>
                    </div>
                </div>
                <CatList searchKey={searchKey ? searchKey : ''} subCategory={selectedSubCategory} category={params.category} />
        </div>
    )
}

export default ProductsCategory
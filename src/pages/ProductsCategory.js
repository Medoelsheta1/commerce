import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../Components/hooks/useFetch'
import CatList from '../Components/Cart/CatList'
const ProductsCategory = (props) => {
    const [selectedSubCategory , setSelectedSubCategory] = useState('')
    const [range , setRange] = useState(null)
    const [sort , setSort] = useState('')
    const getRangeHandler = (e) => {
        setRange(e.target.value)
    }
    const params = useParams() 
    const {data , isLoading , err } = useFetch(`sub-categories${params.category ?`?[filters][categories][title][$eq]=${params.category}` : ''}`)
    const addCategory = (e) => {
        const value = e.target.value
        setSelectedSubCategory(value)
    }
    const sortInputHandler = (e) => {
        setSort(e.target.value)
    }
    const searchKey = props.Key
    return (
            <div className='Products row p-0 m-0 pb-5  '>
                <div className='ProductsSettings col-3   text-start'>
                    <div className='filterItem'>
                        <h4 className='pb-2'>Products Category</h4>
                        {err && 'somthing went wrong'}
                        { isLoading ? 'Loading':  data.map((item) => {
                            return (
                                <div className='mb-2 sub-cat' key={item.id}>
                                    <input name='cat' id={item.id} type='radio' value={item.attributes.title} onClick={addCategory} className='me-2' />
                                    <label htmlFor={item.id}>{item.attributes.title}</label>                        
                                </div>                            
                            )
                        })}
                    </div>
                    <div className='filterItem'>
                        <h4 className='pt-5 pb-2'>Filter byy price</h4>
                        <span>0</span>
                        <input type='range' min='0' max='1000' step='10' onChange={getRangeHandler}  />
                        <span>{range}</span> 
                    </div>
                    <div className='filterItem pt-4'>
                        <h4 className='pb-2'>Sort by</h4>
                        <div className='d-flex'>
                            <input className='me-2' type='radio' name='ass' id='asc' value='asc' onClick={sortInputHandler} />
                            <label className='w-auto' htmlFor='asc'>Price (Lowest first)</label>                        
                        </div>
                        <div className='mt-2 d-flex'>
                            <input className='me-2' type='radio' name='ass' id='desc' value='desc' onClick={sortInputHandler} />
                            <label className='w-auto' htmlFor='desc'>Price (Highest first)</label>                        
                        </div>
                    </div>
                </div>
                <CatList searchKey={searchKey ? searchKey : ''} subCategory={selectedSubCategory} range={range} category={params.category ? params.category : ''}  sort={sort} />
        </div>
    )
}

export default ProductsCategory
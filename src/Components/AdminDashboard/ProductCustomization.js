
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
const ProductCustomization = () => {
    let {id} = useParams('id')
    const [title , setTitle] = useState('')    
    const [price , setPrice] = useState('')    
    const [description , setDescription] = useState('')    
    const {data , isLoading  } = useFetch(`products?populate=*&[filters][id][$eq]=${id}`)

    const formHandler = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(price)
        console.log(description)
        console.log(data[0]?.id)
        axios.put(`https://strapi-nbja.onrender.com/api/products/${data[0]?.id}` ,
        {
            "data": {
                title: title,
                description: description,
                price: price                
            }

        })
        setTitle('')
        setPrice('')
        setDescription('')
    }
    return (
        <>
        {!isLoading && <form className='productCustomize p-4' onSubmit={formHandler}>
            
            <h1>Customize product {data[0]?.id}</h1>
                <div>
                    <label>Title: {data[0]?.attributes?.title}</label><br />
                    <input onChange={(e) => setTitle(e.currentTarget.value)} className='mt-1 p-1' type='text' placeholder='New Title'  />                    
                </div>
                <div className='productCustomizeImage d-flex justify-content-start mt-4 align-items-center'>
                    <img className='me-3' src={data[0]?.attributes?.img1?.data?.attributes?.url} alt='image1' />
                    <img src={data[0]?.attributes?.img2?.data?.attributes?.url} alt='image2' />

                    
                        
                </div>
                <input  className='mt-2' type="file" id="img" name="img" accept="image/*"/><br />
                <label className='mt-3'>Price: ${data[0]?.attributes?.price}</label><br />
                <input className='mt-1  p-1' onChange={(e) => setPrice(e.currentTarget.value)} type='number' placeholder='New Price' /><br />
                <h4 className='mt-3 mb-0'>Description</h4>
                <p className='oldDescription mt-1'>{data[0]?.attributes?.description}</p><br/>
                <textarea onChange={(e) => setDescription(e.currentTarget.value)} placeholder='New Description' className='mt-0 p-2' rows="4" cols="30" width='200' height='150'></textarea><br />
                <button type='submit'  className='btn btn-primary btn-lg mt-3 p-2'>Send</button>
            </form>}        
        </>


    )
}

export default ProductCustomization
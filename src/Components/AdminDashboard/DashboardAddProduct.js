import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer , toast } from 'react-toastify'

const DashboardAddProduct = () => {
    const [image1 , setImage1] = useState('')
    const [image2 , setImage2] = useState('')
    const [title , setTitle] = useState('')
    const [price , setPrice] = useState('')
    const [description , setDescription] = useState('')
    const [category , setCategory] = useState('')
    const [subCategory , setSubCategory] = useState('')
    const [isTrending , setIstrending] = useState('')
    const navigate = useNavigate()
    const formHandler = (e) => {
        e.preventDefault()
    if(title &&price &&  description && category && isTrending && subCategory) {
            axios.post('https://strapi-nbja.onrender.com/api/products' , {
                "data": {
                    title: title,
                    price: price,
                    // img1: image1,
                    // img2: image2,
                    description: description,
                    // sub_categories: subCategory,
                    // categories: category,   
                    isTrending: isTrending     
                    }  ,                    
                })

        toast.success('Adding Item Successfully')
        navigate('/admin/home')        
    }else {
        toast.error('You must type all requirments')
    }


    }
    const image1Handler = (e) => {
        setImage1(e.target.files[0])
    }
    const image2Handler = (e) => {
        setImage2(e.target.files[0])
    }
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const categoryHandler = (e) => {
        setCategory(e.currentTarget.id)
    }
    const subCategoryHandler = (e) => {
        setSubCategory(e.currentTarget.id)
    }
    const isTrendingHandler = (e) => {
        setIstrending(e.currentTarget.id)
    }


    return (
        <>
        <div className='dash-add-product p-2'>
            <h4>Add your product</h4>
            <form onSubmit={formHandler}>
                <label className='mb-2'>Title</label><br />
                <input onChange={titleHandler} type='text' placeholder='Title' className='p-2 mb-3 input' /><br />                        
                <label className='mb-2'>Price</label><br />
                <input onChange={priceHandler} type='number' placeholder='Price' className='p-2 mb-3 input' /><br />                        
                <label className='mb-2'>Description</label> <br />
                <textarea onChange={descriptionHandler} className='p-2' cols='38' rows='5' placeholder='Description'></textarea><br />
                <div className='d-flex justify-content-between align-items-start dash-cat'>
                    <div>
                        <label className='mt-2 h6'>sub_categories</label><br />
                        <input onChange={subCategoryHandler} type='radio' className='me-2 ms-2' name='sub-cat' id='Dresses'  /><label className=' mt-2' htmlFor='Dresses'>Dresses</label><br />
                        <input onChange={subCategoryHandler} type='radio' className='me-2 ms-2' name='sub-cat' id='Hoddies'/><label className=' mt-2' htmlFor='Hoddies'>Hoddies</label><br />
                        <input onChange={subCategoryHandler} type='radio' className='me-2 ms-2' name='sub-cat' id='Jackets' /><label  className=' mt-2'htmlFor='Jackets'>Jackets</label><br />
                        <input onChange={subCategoryHandler} type='radio' className='me-2 ms-2' name='sub-cat' id='T-shirts' /><label  className=' mt-2'htmlFor='T-shirts'>T-shirts</label><br />
                        <input onChange={subCategoryHandler} type='radio' className='me-2 ms-2' name='sub-cat' id='Track pants' /><label  className=' mt-2'htmlFor='Track pants'>Track pants</label><br />
                    </div>
                    <div>
                        <label className='h6 mt-3'>Category</label><br />
                        <input type='radio' onChange={categoryHandler} className='me-2 ms-2' name='cat' id='Men'  /><label className=' mt-2' htmlFor='Men'>Men</label><br />
                        <input type='radio' onChange={categoryHandler} className='me-2 ms-2' name='cat' id='Women'/><label className=' mt-2' htmlFor='Women'>Women</label><br />
                        <input type='radio' onChange={categoryHandler} className='me-2 ms-2' name='cat' id='Kids' /><label  className=' mt-2'htmlFor='Kids'>Kids</label><br />    
                    </div>
                    </div>
                    <label  className=' mt-3 me-2 mb-2'>Is Trending</label><br />
                    <input onChange={isTrendingHandler} type='radio' className='me-2 ms-2' name='trend' id='True' /><label  className=' mt-2'htmlFor='True'>True</label> 
                    <input onChange={isTrendingHandler} type='radio' className='me-2 ms-2' name='trend' id='False' /><label  className=' mt-2'htmlFor='False'>False</label><br />    

                    <div className='images d-flex flex-column justify-content-center align-items-start'>
                        <div className='d-flex flex-column align-items-center '>
                            {image1 ? <img src={URL.createObjectURL(image1)} alt='img1' />: <img src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj?format=jpg&name=small" alt='img1'/>}
                            <label  className='btn  btn-danger mt-4' htmlFor='image-upload1'>Add first Image</label>                              
                        </div>
                        <div className='d-flex flex-column align-items-center '>
                            {image2 ? <img src={URL.createObjectURL(image2)} alt='img2' /> : <img src='https://pbs.twimg.com/media/FtsxswzaUAAZXJj?format=jpg&name=small' alt='img2' />}
                            <label  className='btn  btn-danger' htmlFor='image-upload2'>Add second Image</label>                            
                        </div>
                    </div>
                        
            <input className='d-none' type='file' onChange={image1Handler} id='image-upload1' accept='image/jpeg, image/png, image/jpg' />
            <input className='d-none' type='file' onChange={image2Handler} id='image-upload2' accept='image/jpeg, image/png, image/jpg' />

            <button className='btn btn-large btn-primary m-2 mt-4' type='submit'>Send</button>
            </form>
        </div>
        <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        /> 
</>
    )
}

export default DashboardAddProduct
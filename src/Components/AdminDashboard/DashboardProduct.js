import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import {AiTwotoneEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
import { Link } from 'react-router-dom'
const DashboardProduct = () => {
    const [numberPage , setNumberPage] = useState(1)
    let {data , isLoading } = useFetch(`products?populate=*&pagination[page]=${numberPage}&pagination[pageSize]=10`)
    return (
        <div className='dash-products'>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {isLoading ? 'Loading' : 
            data.map((ele) => {
                return <tr key={ele?.id} className='dash-product'>
                    <td>{ele?.attributes?.title}</td>
                    <td><img src={ele?.attributes?.img1?.data?.attributes?.url} alt='as'/></td>
                    <td>${ele?.attributes?.price}</td>
                    <td><Link to={`${ele?.id}`}><AiTwotoneEdit className='me-1 text-primary h5' /></Link> <AiFillDelete onClick={() => {
                        axios.delete(`https://strapi-nbja.onrender.com/api/products/${ele?.id}`)
                    }
                    } className='h5 text-danger' /></td>
                    </tr>
            })}            
        </tbody>
        </table>
        <div className='dash-buttons d-flex justify-content-center align-items-center'>
            <button type="button" disabled={numberPage === 1 ? true : false} className="btn btn-danger me-2" onClick={() => setNumberPage(numberPage - 1)}>Prievius</button>
            <button type="button" disabled={numberPage === 5 ? true : false} className="btn btn-primary"onClick={() => setNumberPage(numberPage + 1)}>Next</button>
        </div>
        <div className='dash-customization'>

        </div>
        </div>
    )
}

export default DashboardProduct
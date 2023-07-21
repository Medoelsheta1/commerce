import axios from 'axios'
import { useEffect, useState } from 'react'


const  useFetch =  (url) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                
                const res = await axios.get(`https://strapi-nbja.onrender.com/api/${url}` , {
                    headers: {
                        Authorization: 'bearer 268fd66b94e80e358665336de61607d0a45285c90a8ef7eecb81248ce56014cab292980f703d428529b7343645532865a38988bf718af4aa882ff94c5aed874b7045a0715a95e338c0fa5d23bd030cacc39ca3bbc2c7a19acc832064b25fab54e43e497316688029965614fbdbd61325278b18948aa0edfb80f9aca6331b65a6'
                    }
                })
                setData(res.data.data)
                setIsLoading(false) 
            }catch(err) {
                setError(true)
            }
        }

        fetchData()
        
    }, [url])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch
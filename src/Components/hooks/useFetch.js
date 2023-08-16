import axios from 'axios'
import { useEffect, useState } from 'react'


const  useFetch =  (url , subCategory , productcode) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                
                const res = await axios.request(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/${url}${subCategory ? `?categories=${subCategory}` : ''}${productcode? `?productcode=${productcode}` : ''}` , {
                    headers: {
                        'X-RapidAPI-Key': '322e2a53eemsha59cdb0b8968ebcp192fd8jsn14d70097abb0',
                        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
                    }
                    
            })
                setData(res.data)
                setIsLoading(false) 
            }catch(err) {
                setError(true)
            }
        }

        fetchData()
        
    }, [url, subCategory , productcode])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch
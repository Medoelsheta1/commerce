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
                        'X-RapidAPI-Key': 'f181185155msh30e51881aa5054cp1c1fe5jsn69b4d28c3b06',
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
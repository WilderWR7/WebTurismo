import { useEffect, useState } from 'react'
import turismoDB from '../api/turismoDB'

export const useGetHotels = () => {
    const [dataResp, setAgency] = useState({
        dataHotel:{hotels:[]},
        isLoading: true
    })
    const getMovieDetails = async()=>{
        const const1 =  turismoDB.get('/hotels/')
        const hotels = await const1
        setAgency({
            dataHotel: hotels.data.data,
            isLoading: false
        })

    }
    
    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...dataResp
    }
    
}

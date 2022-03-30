import { useEffect, useState } from 'react'
import turismoDB from '../api/turismoDB'

export const useGetAgencies = () => {
    const [dataResp, setAgency] = useState({
        dataAgencies:{agencies:[]},
        isLoading: true
    })
    const getAgenciesDetails = async()=>{
        const const1 =  turismoDB.get('/agencies')
        const agencies = await const1
        setAgency({
            dataAgencies: agencies.data.data,
            isLoading: false
        })
    }
    
    useEffect(() => {
        getAgenciesDetails()
    }, [])

    return {
        ...dataResp
    }
    
}

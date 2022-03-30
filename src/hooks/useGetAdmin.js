import {  useEffect, useState } from 'react'
import turismoDB from '../api/turismoDB'

export const useGetAdmin = () => {
    const [dataResp, setAgency] = useState({
        dataUsers:{users:[]},
        dataManagers:{managers:[]},
        isLoading: true
    })
    const GetAdminDetails = async()=>{
        const const1 =  turismoDB.get('/users')
        const const2 =  turismoDB.get('/managers')
        const [users,managers] = await Promise.all([const1,const2])
        setAgency({
            dataUsers: users.data.data,
            dataManagers: managers.data.data,
            isLoading: false
        })
    }
    
    useEffect(() => {
        GetAdminDetails()
    }, [])

    return {
        ...dataResp
    }
    
}

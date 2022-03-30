import React from 'react'
import { useParams } from 'react-router-dom';

export const HotelListCrudScreen = () => {
    console.log(123)
    
    const { name } = useParams();
    console.log(name)
    return (
        <div className="page-wrapper"> 
        <div className="container-fluid">
            <p>hola</p>

            </div>
            </div>

    )
}

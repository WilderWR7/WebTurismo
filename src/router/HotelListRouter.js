import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HotelListCrudScreen } from '../screen/managerial/HotelListCrudScreen'
import { HotelListScreen } from '../screen/managerial/HotelListScreen'

export const HotelListRouter = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<HotelListScreen/>} />
                <Route path={'/crud/:name'} element={<HotelListCrudScreen/>} />
            </Routes>
        </>
    )
}

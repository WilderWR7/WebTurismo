import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/admin/NavBar'
import { LeftSidebarManagerial } from '../components/managerial/LeftSidebarManagerial'
import { AgenciesCrudScreen } from '../screen/managerial/AgenciesCrudScreen'
import { AgenciesListScreen } from '../screen/managerial/AgenciesListScreen'
import { HotelCrudScreen } from '../screen/managerial/HotelCrudScreen'
import { HotelListRouter } from './HotelListRouter'

export const ManagerialUsersRouter = () => {
    return (
        <>
            <NavBar type={'/managerial'} />
            <LeftSidebarManagerial/>
            <Routes>
                <Route path='/' element={<HotelCrudScreen/>}  />
                <Route path='/hotels-crud' element={<HotelCrudScreen/>}  />
                <Route path='/agencies-crud' element={<AgenciesCrudScreen/>}  />
                <Route path='/hotel-list/*' element={<HotelListRouter/>}  />
                <Route path='/agencies-list' element={<AgenciesListScreen/>}  />
            </Routes>
        </>
    )
}

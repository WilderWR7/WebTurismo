import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AdminScreen } from '../screen/admin/AdminScreen';
import { UserGerencialScreen } from '../screen/admin/UserGerencialScreen';
import { UserClientScreen } from '../screen/admin/UserClientScreen';

import { CrudAdminScreen } from '../screen/admin/CrudAdminScreen';
import { NavBar } from '../components/admin/NavBar';
import { LeftSidebar } from '../components/admin/LeftSidebar';

export const SuperUserRouter = () => {
    return (
        <>
            <NavBar type = {'/login'} />
            <LeftSidebar/>
            <Routes>
                <Route path='/' element={<AdminScreen/>} />
                <Route path='/userg' element={<UserGerencialScreen/>} />
                <Route path='/userc' element={<UserClientScreen/>} />
                <Route path='/usercrud' element={<CrudAdminScreen/>} />
            </Routes>
        </>
    )
}

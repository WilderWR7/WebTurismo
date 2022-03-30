import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import { LoadingScreen } from '../components/public/LoadingScreen';
import { ScrollTop } from '../components/ScrollTop';
import { ManagerialUsersRouter } from './ManagerialUsersRouter';
import { SuperUserRouter } from './SuperUserRouter';
import { UsersRouter } from './UsersRouter';


export const AppRouter = () => {
    return (
        <HashRouter>
            <ScrollTop/>
            <Routes>
                <Route path='/login/*' element={<SuperUserRouter/>}  />
                <Route path='/*' element={<UsersRouter/>}  />
                <Route path='/managerial/*' element={<ManagerialUsersRouter/>}  />
                <Route path='/loading' element={<LoadingScreen/>}  />
            </Routes>
        </HashRouter>
    )
}
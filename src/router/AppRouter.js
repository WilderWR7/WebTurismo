import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ScrollTop } from '../components/ScrollTop';
import { SuperUserRouter } from './SuperUserRouter';
import { UsersRouter } from './UsersRouter';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <Routes>
                <Route path='/login/*' element={<SuperUserRouter/>}  />
                <Route path='/*' element={<UsersRouter/>}  />
            </Routes>
        </BrowserRouter>
    )
}

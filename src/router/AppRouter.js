import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Index } from '../screen/user/Index';
import { SuperUserRouter } from './SuperUserRouter';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login/*' element={<SuperUserRouter/>}  />
                <Route path='/*' element={<Index/>}  />
            </Routes>
        </BrowserRouter>
    )
}

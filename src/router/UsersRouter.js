import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/public/Footer'
import { NavBar } from '../components/public/NavBar'
import { AgenciesScreen } from '../screen/user/AgenciesScreen'
import { HotelsScreen } from '../screen/user/HotelsScreen'
import { Index } from '../screen/user/Index'
import { LoginScreen } from '../screen/user/LoginScreen'
import { PlacesScreen } from '../screen/user/PlacesScreen'
import { SignUpSreen } from '../screen/user/SignUpSreen'

export const UsersRouter = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/loginUsers' element={<LoginScreen/>} />
            <Route path='/signUpUsers' element={<SignUpSreen/>} />
            <Route path='/places' element={<PlacesScreen/>} />
            <Route path='/hotels' element={<HotelsScreen/>} />
            <Route path='/agencies' element={<AgenciesScreen/>} />
        </Routes>
        <Footer/>
    </>
  )
}

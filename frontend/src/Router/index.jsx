import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../container/Pages/Home'
import Login from '../container/Pages/Login'
import Signup from "../container/Pages/Signup"
import CaptainLogin from "../container/Pages/CaptainLogin"
import CaptainSignup from "../container/Pages/CaptainSignup"
import Ride from '../container/Pages/Ride'
import UserProtectWrapper from '../ProtectedRouter/UserProtectWrapper'
import Logout from '../components/Logout'
import CaptainDashboard from "../container/Pages/DriverDashboard";
import HowToUse from 'd:/HowToUse'
const Router = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/ride' element={<Ride/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/captain-home" element={<CaptainDashboard/>} />
        <Route path="/how-to-use" element={<HowToUse/>}/>
    </Routes> 
    </>
  )
}

export default Router

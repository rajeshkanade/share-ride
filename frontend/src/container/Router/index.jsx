import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from "../Pages/Signup"
import CaptainLogin from "../Pages/CaptainLogin"
import CaptainSignup from "../Pages/CaptainSignup"
import Ride from '../Pages/Ride'
import UserProtectWrapper from '../../ProtectedRouter/UserProtectWrapper'
import Logout from '../../components/Logout'
import CaptainDashboard from "../Pages/CaptainDashboard";
import CaptainProtectWrapper from '../../ProtectedRouter/CaptainProtectWrapper'
import CaptainRideAssignment from '../Pages/CaptainRideAssignment'
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
        <Route path='/ride' element={<UserProtectWrapper><Ride/></UserProtectWrapper>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/captain-home" element={<CaptainProtectWrapper>
        <CaptainDashboard/>
        </CaptainProtectWrapper>} />
        <Route path="/captain-assignment" element={<CaptainRideAssignment/>}/>
    </Routes> 
    </>
  )
}

export default Router

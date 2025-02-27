import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../container/Pages/Home'
import Login from '../container/Pages/Login'
import Signup from "../container/Pages/Signup"
import CaptainLogin from "../container/Pages/CaptainLogin"
import CaptainSignup from "../container/Pages/CaptainSignup"
const Router = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
    </Routes> 
    </>
  )
}

export default Router

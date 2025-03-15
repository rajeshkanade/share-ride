import React from 'react'
import Login from './container/Pages/Login'
import Router from './container/Router/'
import { BrowserRouter } from 'react-router-dom'
import Home from './container/Pages/Home'
import UserContext from './context/UserContext'
import CaptainContext from './context/CaptainContext'
const App = () => {
  return (
    <>
    <CaptainContext>
    <UserContext>
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
    </UserContext>
    </CaptainContext>
    </>
  )
}

export default App

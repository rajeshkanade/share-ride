import React from 'react'
import Login from './container/Pages/Login'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Home from './container/Pages/Home'
import UserContext from './context/UserContext'
const App = () => {
  return (
    <>
    <UserContext>
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
    </UserContext>
    </>
  )
}

export default App

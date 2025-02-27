import React from 'react'
import Login from './container/Pages/Login'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Home from './container/Pages/Home'
const App = () => {
  return (
    <>
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
    </>
  )
}

export default App

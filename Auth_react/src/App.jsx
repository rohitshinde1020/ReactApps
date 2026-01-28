import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Sign_Up from './components/sign_Up'
import Dashboard from './components/Dashboard'

function App() {


  return (
    <>
      <div className='h-full w-full bg-gray-500 overflow-y-hidden '>
        <Routes>
          <Route path='/' element={<Login />}>Login</Route>
          <Route path='/signup' element={<Sign_Up />}>Sign Up</Route>
          <Route path='/dashboard' element={<Dashboard />}>Dashboard</Route>
        </Routes>
      </div>


    </>
  )
}

export default App

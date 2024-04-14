import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className=' bg-gray-700 h-[100vh] w-[100vw] text-white font-mont'>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element='' /> */}
      </Routes>
    </div>
  )
}

export default App

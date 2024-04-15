import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'  
import Visualise from './Components/Visualise'
import Learn from './Components/Learn'

function App() {
  return (
    <div className=' bg-gray-700 h-full w-full text-white font-mont'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Learn />} />
        <Route path='/visualise' element={<Visualise />} />
      </Routes>
    </div>
  )
}

export default App

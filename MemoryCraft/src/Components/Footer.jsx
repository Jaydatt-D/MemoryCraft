import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='text-2xl font-bold flex justify-center items-center h-16 w-full bg-gray-700'>
      Made By&nbsp;<Link to='https://github.com/Jaydatt-D' className=' hover:text-logo-color'> Jaydatt</Link>
    </div>
  )
}

export default Footer

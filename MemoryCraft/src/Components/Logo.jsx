import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className='h-full w-full flex items-end cursor-pointer'>
      <img className='h-full' src={logo} alt="" />
      <div className=' font-mont text-white font-semibold text-3xl mb-2'>emory<span className=' text-logo-color'>Craft</span></div>
    </Link>
  )
}

export default Logo

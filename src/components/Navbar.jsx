import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='font-family: "Hanalei", system-ui flex justify-between items-center py-5 px-10 mx-8 sm:mx-20 xl:mx-32 bg-gray-400 text-white'>
        <img src={assets.logo} alt="logo" />
            
    </div>
  )
}

export default Navbar
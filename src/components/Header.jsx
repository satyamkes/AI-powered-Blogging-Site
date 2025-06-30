import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative '>
      <div className='text-center mt-20 mb-10'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary '><p>New: AI feature Integrated </p>
        <img src={assets.star_icon} className='w-2.5' alt="" />
        </div>
        
        <h1 className='text-3xl sm:text-4xl font-semibold mb-4'>Welcome to your own <span className='text-primary'>blogging</span> <br/> platform</h1>
        
        <p className='my-6 sm:my-8 max-w-2xl m-auto mx-sm: text-xs text-grey-500'> This is your space to think out loud, to share what matters, and to write without filter. whether it's one or a thousand, your story starts here.</p>

        <form>
          <div className='relative mb-8 sm:mb-12'>
          <input type="text" placeholder='Search for blogs, topics, or authors' className='w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300' />
          <button type="submit" className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-all duration-300'>Search</button>  
          </div>
        </form>
      </div>
      <img src={assets.gradientBackground} alt="absolute -top-50 -z-1 opacity-50"/>

    </div>
  )
}

export default Header
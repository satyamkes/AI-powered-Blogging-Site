import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import asset from '../../assets'
import { Dashboard, AddBlog, ListBlog, Comments } from './admin'

const Layout = () => {

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
    <div>
      <img src={asset.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={()=> navigate('/')} />
      <button onClick={logout} className='text-sm '></button>
    </div>
    </>
  )
}

export default Layout
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './components/admin/Login'
import Layout from './pages/admin/Layout'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
  
        <Route path="admin" element={true ? <Layout/>: <Login/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="add-blog" element={<AddBlog/>}/>
        <Route path="list-blog" element={<ListBlog/>}/>
        <Route path="comments" element={<Comments/>}/>

      </Routes>
    </div>
  )
}

export default App
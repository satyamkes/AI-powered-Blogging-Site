import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        {/* <Route path="/contact" element={<div>Contact</div>}/>
        <Route path="/blog" element={<div>Blog</div>}/> */}
      </Routes>
    </div>
  )
}

export default App
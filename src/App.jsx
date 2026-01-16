import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import BlogForm from './Views/BlogForm'
import CardDetail from './Pages/CardDetail/CardDetail'

const App = () => {
  const [blogs, setBlogs] = useState([])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/form'
        element={<BlogForm blogs={blogs} setBlogs={setBlogs} />}
      />
      <Route path='/details/:id' element={<CardDetail blogs={blogs} />} />
    </Routes>
  )
}

export default App

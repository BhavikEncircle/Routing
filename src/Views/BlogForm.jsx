import React, { useState } from 'react'
import Blogs from '../Pages/Blogs/Blogs'

const BlogForm = ({ blogs, setBlogs }) => {
  const [blog, setBlog] = useState({ title: '', content: '' })

  const handleAdd = () => {
    if (!blog.title || !blog.content) return
    setBlogs([...blogs, blog])
    setBlog({ title: '', content: '' })
  }

  const handleDelete = (id) => {
    const updatedBlog = blogs.filter((_, index) => index !== id)
    setBlogs(updatedBlog)
  }

  return (
    <div className='flex mt-5 flex-col items-center'>
      <div className='mt-5  border p-5 w-150 rounded-xl'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAdd()
          }}
          className='flex flex-col justify-center items-center'
        >
          <label className='text-2xl fw-bolder mb-1 ' htmlFor=''>
            Title
          </label>

          <input
            type='text'
            className='border px-2 mx-2 w-100 rounded-xl text-xl flex py-1 '
            placeholder='Add Title'
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <br />
          <label className='text-2xl fw-bolder mb-1' htmlFor=''>
            Content
          </label>

          <input
            type='text'
            className='border px-2 mx-2 w-100 rounded-xl text-xl flex py-1 '
            placeholder='Add Content'
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          />

          <button
            type='submit'
            className='btnAdd w-50 mx-auto mt-4 text-2xl text-white p-2 rounded-xl cursor-pointer'
          >
            Add Blog
          </button>
        </form>
      </div>
      {blogs.length === 0 ? (
        <p className='text-center text-2xl font-md mt-5'>No Blogs yet.</p>
      ) : (
        blogs.map((items, index) => (
          <Blogs
            key={index}
            blogs={items}
            index={index}
            deleteHandler={handleDelete}
          />
        ))
      )}
    </div>
  )
}

export default BlogForm

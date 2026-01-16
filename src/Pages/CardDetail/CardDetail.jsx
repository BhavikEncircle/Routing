import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CardDetail = ({ blogs }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogs[parseInt(id)]

  if (!blog) {
    return (
      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='text-2xl text-gray-600'>No blog data found</p>
        <button
          onClick={() => navigate('/form')}
          className='mt-4 bg-blue-400 p-2 rounded text-white'
        >
          Go to Blog Form
        </button>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div className='border p-8 rounded-xl bg-violet-50 border-violet-200 w-full max-w-3xl'>
        <button
          onClick={() => navigate('/form')}
          className='mb-4 bg-gray-400 p-2 rounded text-white hover:bg-gray-500'
        >
          ← Back to Blogs
        </button>

        <h1 className='text-4xl font-black mb-4'>{blog.title}</h1>

        <div className='border-t border-violet-300 pt-4'>
          <p className='text-xl text-gray-700 leading-relaxed whitespace-pre-wrap'>
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardDetail

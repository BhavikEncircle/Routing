import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogs = ({ blogs, index, deleteHandler }) => {
  const navigate = useNavigate()

  const navigateDetail = () => {
    navigate(`/details/${index}`)
  }

  return (
    <div className='flex w-130 flex-col border gap-2 my-3 rounded bg-violet-50 border-violet-200'>
      <div className='m-2 flex justify-between px-3'>
        <div>
          <h2 className='text-3xl font-black'>{blogs.title}</h2>
          <p className='text-xl text-gray-600'>{blogs.content}</p>
        </div>

        <div className='flex items-center'>
          <button
            onClick={() => deleteHandler(index)}
            className='bg-red-500 p-2 rounded me-2'
          >
            Delete blog
          </button>

          <button onClick={navigateDetail} className='bg-blue-400 p-2 rounded'>
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blogs

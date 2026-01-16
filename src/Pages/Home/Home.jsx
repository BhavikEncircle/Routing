import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/form')
  }
  return (
    <Fragment>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-black'>Welcome to Blogs</h1>
        <br />
        <h2 className='text-xl font-bold'>Share your thoughts here</h2>
        <button
          onClick={handleNavigate}
          className='btnAdd w-50 mx-auto mt-4 text-2xl text-white p-2 rounded-xl cursor-pointer'
        >
          Go to Blog form
        </button>
      </div>
    </Fragment>
  )
}

export default Home

"use client"

import React from 'react'
import Navbar from '../components/navbar'
import { useRouter } from 'next/navigation'
const Apply = () => {
    const router = useRouter();
  return (
    <div>
      <Navbar/>
      <h1 className='text-2xl font-bold text-center'>Nested Routing / Navigation</h1>
      <div className='flex justify-center'>
      <button onClick={()=>{router.push("./apply/jobs")}} className='text-2xl text-center mt-10 bg-gray-200 w-48 h-10 rounded-md hover:bg-gray-300'>Jobs</button>
      </div>
      
    </div>
  )
}

export default Apply

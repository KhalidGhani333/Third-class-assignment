"use client"
import React from 'react'
import Navbar from '@/app/components/navbar'
const Machinelearning = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center'>
      <button onClick={()=>{alert("Apply")}} className='bg-blue-500 w-36 rounded-md '>Apply</button>
      </div>
    </div>
  )
}

export default Machinelearning

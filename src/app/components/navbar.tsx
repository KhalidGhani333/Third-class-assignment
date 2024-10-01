"use client"
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <div className='flex-1 text-center mb-10 w-[100%] sm:flex bg-blue-500 h-20 sm:w-[100%] text-white justify-between items-center'>
        <h1 className='text-xl py-2 sm:text-2xl font-bold ml-2 sm:ml-20'>Assignment-3</h1>
        <div className='flex justify-around sm:flex font-bold mr-4 sm:mr-20 gap-2 sm:gap-6'>
         <Link href="/">Home</Link>   
         <Link href="/about">About</Link>   
         <button onClick={()=>{
          alert("No course avaliable ")
          }}>
         <Link href="/course">Course</Link></button>
         <Link href="/apply">Apply</Link>   
         <Link href="/contact">Contact</Link>   

        </div>
      </div>
    </div>
  )
}

export default Navbar

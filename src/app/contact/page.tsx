import React from 'react'
import Navbar from '../components/navbar'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl text-center mt-20 mb-10'>Contact Us</h1>
      <div className='flex justify-center'>
      <div className='flex justify-items-center w-[300px] sm:w-[600px] h-[600px] sm:h-[400px] border rounded-md border-gray-500 shadow-xl '>
        <form>
            <div className='grid justify-items-center grid-flow-row sm:grid-cols-2 mt-20  pl-4 gap-20'>
                <input className='outline-none border rounded-md text-gray-900' type="text" placeholder='First Name'/>
                <input className='outline-none border rounded-md text-gray-900' type="text" placeholder='Last Name'/>
                <input className='outline-none border rounded-md text-gray-900' type="email" placeholder='Email'/>
                <input className='outline-none border rounded-md text-gray-900' type="number" placeholder='Number'/>
                <button className='bg-blue-500 text-white hover:bg-blue-400 w-28 rounded-md '>Submit</button>
            </div>
        </form>

      </div>
      </div>
      
    </div>
  )
}

export default Contact

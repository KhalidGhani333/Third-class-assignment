import React from 'react'
import Navbar from '../components/navbar'

const About = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <h1 className='text-2xl items-center font-bold mt-20 text-center  bg-blue-500 text-white'>Components:</h1>
        <p className=' text-center justify-around'>In Next.js, components are reusable building blocks of your application. They allow you to break down your UI into smaller, manageable pieces. Components in Next.js are essentially JavaScript or TypeScript functions that return JSX (JavaScript XML), which is then rendered as HTML on the page.</p>
        <h1 className='text-2xl font-bold mt-20 text-center bg-blue-500 text-white'>Linking:</h1>
        <p className=' text-center justify-around'>In Next.js, linking refers to the process of navigating between pages in a Next.js application. Next.js provides a special component called <b>Link</b> from the next/link package that allows for client-side navigation between different pages, improving performance by avoiding full page reloads.</p>
        <h1 className='text-2xl font-bold mt-20 text-center bg-blue-500 text-white'>Rounting</h1>
        <p className=' text-center justify-around'>In Next.js, routing refers to the way the framework manages navigation between different pages in a web application. Next.js provides a file-based routing system, which means that the structure of your file system in the pages directory determines the routes of your application.</p>
      </div>
      <p className='text-center mt-14'>&copy;Khalid Ghani</p>
    </div>
  )
}

export default About

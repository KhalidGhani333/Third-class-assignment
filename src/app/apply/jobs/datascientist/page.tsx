
import React from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/navbar'

const Scientist = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid grid-flow-row gap-10 justify-center text-center bg-yellow-100'>
      <Link href="/apply/jobs/datascientist/machinelearning">Job-1</Link>
      <Link href="/apply/jobs/datascientist/dataAnalyst">Job-2</Link>
      <Link href="/apply/jobs/datascientist/researchScientist">Job-2</Link>
      </div>
    </div>
  )
}

export default Scientist

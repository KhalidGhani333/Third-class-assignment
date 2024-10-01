"use client"
import React from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/navbar'
import { useRouter } from 'next/navigation'
const Job = () => {
    const router = useRouter();
  return (
    <div>
    <Navbar/>
     <div className='grid grid-flow-row gap-10 justify-center text-center bg-yellow-100'>
     <Link href="/apply/jobs/datascientist">Data Scientist</Link>
     <Link href="/apply/jobs/datascientist">Software Developer</Link>
     <Link href="/apply/jobs/datascientist">Database Administrator</Link>
     <Link href="/apply/jobs/datascientist">AI Engineer</Link>
     <Link href="/apply/jobs/datascientist">Full Stack Developer</Link>
     <Link href="/apply/jobs/datascientist">Cybersecurity Specialist</Link>
     <Link href="/apply/jobs/datascientist">Network Engineer</Link>
     <button onClick={()=>{router.push("/apply")}}>Back</button>
     </div>
    </div>
  )
}

export default Job

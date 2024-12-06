"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const route=useRouter()
  return (
    <div>
        <nav className='flex justify-between bg-black h-20'>
            <div className='flex'>
            <h1 className='text-fuchsia-700 font-bold text-3xl mt-5 mx-4'>Ramisa&apos;s</h1>
            <p className='text-zinc-500 font-bold text-3xl mt-5 -mx-3'>.Blog</p>
            </div>
            <ul className='flex space-x-5'>
                <button onClick={()=>route.push("/")}><li className='text-zinc-400 hover:text-zinc-500 font-semibold'>Home</li></button>
                <button onClick={()=>route.push("/about")}><li className='text-zinc-400 hover:text-zinc-500 font-semibold'>About</li></button>
                <button onClick={()=>route.push("/blog")}><li className='text-zinc-400 hover:text-zinc-500 font-semibold'>Blog</li></button>
                <button onClick={()=>route.push("/contact")}><li className='text-zinc-400 hover:text-zinc-500 font-semibold'>Contact</li></button>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar
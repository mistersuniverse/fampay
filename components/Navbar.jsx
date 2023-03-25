import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-24 bg-black text-white px-10'>
        <div className='text-4xl font-bold'><a href="">fampay</a></div>
        <div className=''>
            <ul className='flex space-x-8 text-xl items-center'>
                <a href="#"><li className='hover:text-blue-500 duration-300'>About</li></a>
                <a href="#"><li className='hover:text-blue-500 duration-300'>Parents</li></a>
                <a href="#"><li className='hover:text-blue-500 duration-300'>Blog</li></a>
                <a href="#"><button className='px-4 py-2 bg-blue-500 rounded-full'>Download Fampay</button></a>
            </ul>
        </div>
    </nav>
  )
}

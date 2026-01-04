import React from 'react'

const Navbar = () => {
  return (
 <nav className='p-2 flex items-center justify-between bg-purple-500 '>

    <div className='flex gap-20'>
        <h1 className='font-bold text-2xl'>LUMINU</h1>
        <ul className='flex gap-5'>
            <li> <a className='text-purple-400' href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
    <div>
        <button>Contact</button>
    </div>
 </nav>
  )
}

export default Navbar

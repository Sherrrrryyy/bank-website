import React from 'react'
import Button from '../components/Button'

const Navbar = () => {
  return (
 <nav className='fixed top-0 left-0 right-0 z-10 bg-white/30 backdrop-blur-md shadow-md p-3 flex items-center justify-between'>

    <div className='flex gap-20'>
        <h1 className='font-bold text-2xl'>LUMINU</h1>
        <ul className='flex gap-5'>
            <li> <a className='text-purple-400' href="/home">Home</a></li>
            <li><a href="/about" className='text-white'>About</a></li>
            <li><a href="/solutions" className='text-white'>Solutions</a></li>
            <li><a href="/contact" className='text-white'>Contact</a></li>
        </ul>
    </div>
    <div>
        <Button type='button' title='Contact' variant='secondary' />
    </div>
 </nav>
  )
}

export default Navbar

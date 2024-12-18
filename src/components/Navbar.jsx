import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <header className='w-full h-24 bg-darkgrey'>
    <nav className='h-full m-auto overflow-hidden flex justify-between max-w-[1240px] py-0 px-4'>
        <div className='flex items-center'>
            <Link to='/'><img className='w-20 h-auto' src={Logo} alt='' /></Link>
        </div>
        <ul className={click ? "flex items-center justify-self-start  max-lg:flex-col justify-center bg-darkgrey w-full h-full text-center fixed top-0 left-0 transition-all duration-400"
      : "flex flex-row items-center justify-self-start   max-lg:hidden"}>
            <li className=' py-0 px-6 max-lg:text-[1.8rem] mx-0 my-6'>
                <Link to='/' className='text-white'>Home</Link>
            </li>
            <li className=' py-0 px-6 max-lg:text-[1.8rem] mx-0 my-6'>
                <Link to='/pricing' className='text-white'>Pricing</Link>
            </li>
            <li className=' py-0 px-6 max-lg:text-[1.8rem] mx-0 my-6'>
                <Link to='/faq' className='text-white'>FAQ</Link>
            </li>
            <li className=' py-0 px-6 max-lg:text-[1.8rem] mx-0 my-6'>
                <Link to='/contact' className='text-white'>Contact</Link>
            </li>
        </ul>
        <div className='hidden absolute top-8 right-4 max-lg:block' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

        </div>
    </nav>
</header>
  )
}

export default Navbar
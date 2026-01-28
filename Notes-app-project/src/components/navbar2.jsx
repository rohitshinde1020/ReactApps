{/* 
            
Create a responsive navbar using React, React Router Link, and Tailwind CSS ONLY.

Requirements:
- Desktop (md and above):
  - Navbar fixed at the top
  - Logo on the left
  - Navigation links (Home, Upload, Contact, About Us) on the right
  - Horizontal layout using flex
  - Hover effects using Tailwind (text color change + underline with offset)
- Mobile (below md):
  - Show logo on the left
  - Show hamburger menu icon on the right
  - On clicking hamburger, open a dropdown menu
  - Dropdown should contain links: Home, Upload, Contact, About Us
  - Dropdown should be vertical, full-width, and easy to tap
- Use Tailwind utility classes only (NO inline styles, NO CSS files)
- Use useState to toggle mobile menu
- Add smooth transitions for hover and menu open/close
- Clean, modern UI suitable for a student notes-sharing app


            */}

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from "gsap";



export default function Navbar2() {
    const titleref = useRef(null)
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        gsap.from(titleref.current,{
            opacity:0,
            y:-30,
            color:'red',
            duration:1,
            delay:0.3,
        })


    });



    return (
        <>
            <div className='flex px-7 py-4 bg-gray-600 justify-between items-center fixed w-full top-0 z-10 '>
                <h1 className='font-bold md:text-2xl sm:xl text-white ' ref={titleref} >Notes Khojo/Bhejo</h1>
                <div className='hidden md:flex gap-6 text-white '>
                    <Link to='/' className='hover:text-black  transition-colors duration-200 hover:underline hover:underline-offset-8 '>Home</Link>
                    <Link to='/upload' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>Upload</Link>
                    <Link to='/contact' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>Contact</Link>
                    <Link to='/aboutus' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>About us</Link>
                </div>
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden bg-gray-600 text-white w-full fixed top-16 left-0 flex flex-col items-center py-4 space-y-4 transition-all duration-300 z-10 '>
                    <Link onClick={() => setIsOpen(!isOpen)} to='/' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8' >Home</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} to='/upload' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>Upload</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} to='/contact' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>Contact</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} to='/aboutus' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>About us</Link>
                </div>
            )}
        </>
    )
}
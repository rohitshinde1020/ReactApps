import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='flex px-7 py-4 bg-gray-600 justify-between items-center mb-10'>
                <h1 className='font-bold text-2xl text-white  '>Notes Khojo/Bhejo</h1>
                <div className='flex gap-6 text-white '>
                    <Link to='/' className='hover:text-black  transition-colors duration-200 hover:underline hover:underline-offset-8 '>Home</Link>
                    <Link to='/upload'className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>Upload</Link>
                    <Link to='/contact' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>Contact</Link>
                    <Link to='/aboutus' className='hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-8'>About us</Link>
                </div>
            </div>

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
            
        </>
    )

}

export default Navbar;
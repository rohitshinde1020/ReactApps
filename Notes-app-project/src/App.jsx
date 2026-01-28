import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Upload from './pages/upload'
import Contact from './pages/contact'
import About from './pages/about'
import Navbar from './components/navbar'
import Navbar2 from './components/navbar2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full min-h-screen bg-gray-400 relative overflow-auto'>
        <Navbar2 />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutus' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App

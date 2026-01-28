import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoprovider from './context/TodoContext';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';


function App() {

  return (
    <>
      <div className='px-5 py-3 flex flex-col items-center'>
        <ThemeProvider>
          <Todoprovider>
            <ThemeToggle />
            <h1 className='text-3xl font-bold bg-blue-600 px-5 py-3 rounded-lg'>TO-DO list </h1>
            <Addtodo />
            <Todolist />
          </Todoprovider>
        </ThemeProvider>
      </div>



    </>
  )
}

export default App

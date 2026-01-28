import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/one'
import { Headingcontext } from './components/context'

// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//     import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

function App() {
  const [user, setuser] = useState('hello Rohit')

  return (
    <>
      <h1>{user}</h1>
      <Headingcontext.Provider value={user}>
        <Component1 />
      </Headingcontext.Provider>
    </>
  )
}

export default App

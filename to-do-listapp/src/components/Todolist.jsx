import React from 'react';
import { Todostatecontext, Tododispathcontext } from '../context/TodoContext';
import { useContext } from 'react';
import { useState } from 'react';
import { ThemeStateContext } from '../context/ThemeContext';


export default function Todolist() {
    const states = useContext(Todostatecontext);
    const dispatch = useContext(Tododispathcontext);
    const theme = useContext(ThemeStateContext);

    return (
        <>
            <h2 className='text-xl font-semibold '>Todolist </h2>
            {states.map((task) => (
                <div key={task.id}>
                    <Task task={task} />
                </div>
            ))}
        </>
    )
}

function Task({ task }) {
    const dispatch = useContext(Tododispathcontext);
    const [isediting, setisediting] = useState(false);
    return (
        <>
            {isediting ? (
                <span className='flex w-[400px] justify-center gap-3 p-2 items-center text-lg'>
                    <input type="checkbox" checked={task.done} onChange={() => dispatch({ type: 'toggle', id: task.id })} />
                    <input type="text" value={task.text} onChange={(e) => dispatch({ type: 'edit', id: task.id, text: e.target.value })} className=' w-3/5' />
                    <button onClick={() => setisediting(false)} className='bg-blue-500 px-3 py-1 rounded-lg shadow-lg shadow-blue-700'>Save</button>
                    <button onClick={() => dispatch({ type: 'delete', id: task.id })} className='bg-blue-500 px-3 py-1 rounded-lg shadow-lg shadow-blue-700' >Delete</button>
                </span>

            ) : (
                <span className='flex w-[400px] justify-center gap-3 p-2 items-center text-lg' >
                    <input type="checkbox" checked={task.done} onChange={() => dispatch({ type: 'toggle', id: task.id })} />
                    <span style={{ textDecoration: task.done ? 'line-through' : 'none' }} className='w-3/5'>{task.text}</span>
                    <button onClick={() => setisediting(true)} className='bg-blue-500 px-3 py-1 rounded-lg shadow-lg shadow-blue-700'>Edit</button>
                    <button onClick={() => dispatch({ type: 'delete', id: task.id })} className='bg-blue-500 px-3 py-1 rounded-lg shadow-lg shadow-blue-700'>Delete</button>
                </span>
            )
            }
        </>
    )
}
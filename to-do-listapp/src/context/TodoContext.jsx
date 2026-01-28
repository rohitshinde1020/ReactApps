import { createContext, useEffect } from "react";
import React from "react";

import { useReducer } from "react";

export const Todostatecontext = createContext();
export const Tododispathcontext = createContext();

const initialstate = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

function taskreducer(state, action) {
    switch (action.type) {
        case 'added': {
            return [...state, {
                id: action.id,
                text: action.text,
                done: false
            }]
        }

        case 'delete': {
            return state.filter(exp => exp.id !== action.id)
        }

        case 'toggle': {
            return state.map(exp => {
                if (exp.id === action.id) {
                    return { ...exp, done: !exp.done }
                }
                return exp;
            })

        }
        case 'edit': {
            return state.map(exp => {
                if (exp.id === action.id) {
                    return { ...exp, text: action.text }
                }
                return exp;
            })
        }
        default: {
            return state;
        }
    }
}

function init() {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
}

export default function Todoprovider({ children }) {
    const [state, dispatch] = useReducer(taskreducer, initialstate,init);

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(state))
    },[state])

    return (
        <>
            <Todostatecontext.Provider value={state}>
                <Tododispathcontext.Provider value={dispatch}>
                    {children}
                </Tododispathcontext.Provider>
            </Todostatecontext.Provider>
        </>
    )
}
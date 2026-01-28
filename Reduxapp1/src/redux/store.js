import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counters'

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})
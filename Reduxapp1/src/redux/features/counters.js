import { createSlice } from "@reduxjs/toolkit";
const counterslice=createSlice({
    name:"counter",
    initialState:{
        value:1
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByAmount:(state,actions)=>{
            state.value+=actions.payload;
        }
    }
    
})

export const {increment,decrement,incrementByAmount} =counterslice.actions;

export default counterslice.reducer ;
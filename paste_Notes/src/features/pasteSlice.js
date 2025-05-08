// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
  },
  reducers: {
    addToPAste: (state,action) => {
      
    },
    updateToPaste: (state,action) => {
      
    },
    resetAllPastes: (state, action) => {
      
    },
    removeFromPaste:(state,action)=>{

    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = pasteSlice.actions;

// Export reducer to be added to the store
export default pasteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
burrows: [],
};

const burrowSlice = createSlice({
    name: 'Burrow Book',
    initialState,
    reducers:{
        setBurrows: (state, {payload}) =>{
            state.books = payload;
        }
    }
})

const { reducer ,actions } = burrowSlice;
export const {setBurrows} = actions;
export default reducer;
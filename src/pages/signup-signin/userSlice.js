import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    user: {},
};

const userSlice = createSlice({
    name: 'user',
    intialState,
    reducers:{
        setUser: (state, {payload}) =>{
            state.user = payload;
        }
    }
})

const { reducer ,actions } = userSlice;
export const {setUser} = actions;
export default reducer;
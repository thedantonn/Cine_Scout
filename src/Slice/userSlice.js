import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: null,
    reducers:{
        createUser:(state,action) => {
           return action.payload
        },

        removeUser: (state,action) => {
            return null
        }
    }
})
export const {createUser,removeUser} = userSlice.actions
export default userSlice.reducer